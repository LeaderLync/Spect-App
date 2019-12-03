import React from 'react'
import './LoginPage.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/Black-logo-no-background.png'
import Button from '@material-ui/core/Button'


class LoginView extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    var isStudentString = (this.props.isStudent)? "Student Email" : "Company Email"
    var propString = (this.props.isStudent)? "Sam Smith" : "Airbnb"
    var isStudent = (this.props.isStudent) ? 
    (
    <div className="header-top">
        <Button variant="contained" color="primary">Student</Button>
        <Button onClick={this.props.userUpdate} variant="contained">Company</Button>
    </div>
    ) : (
      <div className="header-top">
      <Button onClick={this.props.userUpdate} variant="contained">Student</Button>
      <Button variant="contained" color="primary">Company</Button>
      </div>
    )
    return (
      <div className="login-page container-fluid">
        {isStudent}
        <div className="login-modal">
            <img className="spect-logo" src={logo}></img>
            <form onSubmit={this.props.onSubmit} className="login-form">
            <h6 style={{textAlign: 'left', fontFamily: 'GlacialIndifferenceRegular'}}>{isStudentString}</h6>
              <input
                className="input"
                name="email"
                type="email"
                placeholder={propString}
              />
              <h6 style={{textAlign: 'left', fontFamily: 'GlacialIndifferenceRegular'}}>Password</h6>
              <input
                className="input"
                name="password"
                type="password"
                placeholder="Password"
              />
              <button className="button-signin" type="submit" style={{fontFamily: 'GlacialIndifferenceRegular'}} >Sign In</button>
              <Link to="/signup" className="link" style={{fontFamily: 'GlacialIndifferenceRegular'}}> 
                Create an Account
              </Link>
              <Link to="/signup" className="link" style={{fontFamily: 'GlacialIndifferenceRegular'}}>
                Contact Us
              </Link>
            </form>
        </div>
      </div>
    )
  }
}

export default LoginView