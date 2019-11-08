import React, {Component} from 'react'
import {withRouter} from 'react-router'
import auth from "../../config/firebaseauth"
import SignupView from './SignupView'

class SignupContainer extends Component {
    handleSignup = async (event) => {
        event.preventDefault()
        const {email, password} = event.target.elements;
        try {
            const user = await auth.createUserWithEmailAndPassword(email.value, password.value);
            this.props.history.push("/")
        } catch(error) {
            alert(error)
        }
    }
    render() {
        return <SignUpView isStudent={this.props.isStudent} onSubmit={this.handleSignup}/>
    }
}

export default withRouter(SignupContainer)