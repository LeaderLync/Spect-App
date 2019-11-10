import React, {Component} from 'react'
import {withRouter} from 'react-router'
import auth from "../../config/firebaseauth"
import SignupView from './SignupView'

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
            console.log(email.value)
            console.log(firstname.value)
            console.log(lastname.value)
            console.log(password.value)
            // const user = await auth.createUserWithEmailAndPassword(email.value, password.value);
            // console.log(user)
            // this.props.history.push("/studentsurvey")
        } catch(error) {
            alert(error)
        }
    }
    render() {
        return <SignupView isStudent={this.props.isStudent} onSubmit={this.handleSignup} userUpdate={this.props.userUpdate}/>
    }
}

export default withRouter(SignupContainer)