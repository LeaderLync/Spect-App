import React, {Component} from 'react'
import {withRouter} from 'react-router'
import auth from "../../config/firebaseauth"
import SignupView from './SignupView'
import api from '../../api'
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
            // const uid = await api.registernewuser(newuser.user.uid)
            // console.log(uid)
            // can use newuser.email and newuser.uid
            console.log(newuser)
            this.props.history.push("/studentsurvey")
        } catch(error) {
            alert(error)
        }
    }
    render() {
        return <SignupView isStudent={this.props.isStudent} onSubmit={this.handleSignup} userUpdate={this.props.userUpdate}/>
    }
}

export default withRouter(SignupContainer)