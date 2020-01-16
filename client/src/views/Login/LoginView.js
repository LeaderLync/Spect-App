import React from 'react'
import './LoginPage.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/Black-logo-no-background.png'
import Button from '@material-ui/core/Button'
import PhoneImg from '../../assets/mobile-home-november.png'

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
        <div className="row" style={{height: '100%'}}>
          <div className="col-sm-6">
            {isStudent}
            <div className="login-modal">
                <img className="spect-logo" src={logo}></img>
                <form onSubmit={this.props.onSubmit} className="login-form">
                <h6 style={{textAlign: 'left', fontFamily: 'GlacialIndifferenceRegular'}}>{isStudentString}</h6>
                  <input
                    className="input"
                    name="email"
                    type="email"
                    placeholder={isStudentString}
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
          <div class="col-sm-6" style={{backgroundColor: '#28a4eb'}}>
            <img className="spect-logo" src={logo}></img>
            <h3 style={{color:'white'}}>Now you can start tracking your soft skills and leadership potential to help you develop your best self!</h3>
            <div style={{marginTop: '40px'}}>
                <div class="row">
                  <div class="col-sm-6" style={{maxHeight: '500px'}}><p style={{color: 'white'}}>Our process is simple. We want to get to know you better so we can recommend the best internship, company, or mentor for you</p></div>
                  <div class="col-sm-6" style={{maxHeight: '500px'}}><img style={{height: '75%', margin: '0 auto'}} src={PhoneImg}/></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginView
