import React from 'react'
import './SignupPage.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/Black-logo-no-background.png'
import Button from '@material-ui/core/Button'



class SignupView extends React.Component {
    constructor(props) {
      super(props)
      console.log("ayeee" + this.props.isStudent)
    }
    render() {
  
      var isStudent = (this.props.isStudent) ? 
      (
      <div className="header-top">
          <Button variant="contained" color="primary">Student</Button>
          <Button onClick={this.props.userUpdate} variant="contained">Admin</Button>
      </div>
      ) : (
        <div className="header-top">
        <Button onClick={this.props.userUpdate} variant="contained">Student</Button>
        <Button variant="contained" color="primary">Admin</Button>
        </div>
      )
      var Greeting = (this.props.isStudent) ? "Student" : "Company"
      return (
        <div className="login-page container-fluid">
          {isStudent}
          <div className="login-modal">
              <img className="spect-logo" src={logo}></img>
              <h4>Sign Up for a {Greeting} Account!</h4>
              <form onSubmit={this.props.onSubmit} className="login-form container">
               <h3 style={{textAlign: 'left'}}>First Name</h3>
               <input
                  className="input"
                  name="firstname"
                  type="text"
                  placeholder="First Name"
                />
                <h3 style={{textAlign: 'left'}}>Last Name</h3>
                <input
                  className="input"
                  name="lastname"
                  type="text"
                  placeholder="Last Name"
                />
                <h3 style={{textAlign: 'left'}}>Email</h3>
                <input
                  className="input"
                  name="email"
                  type="email"
                  placeholder="Email"
                />
                <h3 style={{textAlign: 'left'}}>Password</h3>
                <input
                  className="input"
                  name="password"
                  type="password"
                  placeholder="Password"
                />
                <button className="button-signin" type="submit">Register</button>
                <Link to="/signup" className="link"> 
                  Back to login
                </Link>
                <Link to="/signup" className="link">
                  Contact Us
                </Link>
              </form>
          </div>
        </div>
      )
    }
  }
  
  export default SignupView