import React, {Component} from 'react'
import {withRouter} from 'react-router'
import auth from "../../config/firebaseauth"
import SignupView from './SignupView'
import api from '../../api'
import uuid from 'uuid/v4'
class SignupContainer extends Component {
    constructor(props) {
        super(props)
        console.log(this.props.isStudent)
    }
    handleSignup = async (event) => {
        event.preventDefault()
        console.log(event.target.elements)
        const {email, firstname, lastname, password} = event.target.elements;
        try {
            const newuser = await auth.createUserWithEmailAndPassword(email.value, password.value);
            console.log(newuser.user.uid)

            var request = {
                uid: newuser.user.uid,
                accountType: (this.props.isStudent)? 0 : 1
            }
            var response = '0'
            await api.registernewuser(request).then((res) => {
                response = res
            })
            console.log("Im doing this stuff" + response)
            this.props.collectionIdUpdate(response)
            // can use newuser.email and newuser.uid
            if (this.props.isStudent){
              this.props.history.push("/studentsurvey")
            } else {
              this.props.history.push("/companysurvey")
            }

        } catch(error) {
            alert(error)
        }
    }
    render() {
        return <SignupView isStudent={this.props.isStudent} onSubmit={this.handleSignup} userUpdate={this.props.userUpdate}/>
    }
}

export default withRouter(SignupContainer)
