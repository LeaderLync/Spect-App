import React, {Component} from 'react'
import {withRouter} from 'react-router'
import app from "../../config/firebaseauth"
import SignupView from './SignupView'
import api from '../../api'
class SignupContainer extends Component {
    constructor(props) {
        super(props)
    }
    handleSignup = async (event) => {
        event.preventDefault()
        console.log(event.target.elements)
        const {thefile, email, firstname, lastname, password} = event.target.elements;
        console.log(thefile.files[0])
        const imagefile = thefile.files[0]

        try {
            const newuser = await app.auth.createUserWithEmailAndPassword(email.value, password.value);
            console.log(newuser.user.uid)

            var request = {
                uid: newuser.user.uid,
                accountType: (this.props.isStudent)? 0 : 1
            }
            var response = '0'
            await api.registernewuser(request).then((res) => {
                response = res
            })
            this.props.collectionIdUpdate(response)
            const storageref = app.storage.ref()
            const mainImage = storageref.child(response + thefile.files[0].name)
            mainImage.put(imagefile).then((snapshot) => {
                mainImage.getDownloadURL().then((url) => {
                    console.log(url)
                    this.props.avatarURLUpdate(url)
                })
            })
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
