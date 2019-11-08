import React from 'react'
import './LoginPage.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/Black-logo-no-background.png'
import Button from '@material-ui/core/Button'
const LoginView = ({onSubmit}) => {
    return (
        <div className="login-page container-fluid">
        <div>
          <Button>Admin</Button>
          <Button>Student</Button>
        </div>
        <div className="login-modal">
            <img className="spect-logo" src={logo}></img>
            <form onSubmit={onSubmit} className="login-form container">
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
              <button className="button-signin" type="submit">Sign In</button>
              <Link to="/signup" className="link"> 
                Create an Account
              </Link>
              <Link to="/signup" className="link">
                Forgot your password?
              </Link>
              <Link to="/signup" className="link">
                Contact Us
              </Link>
            </form>
        </div>
      </div>
    )
}
export default LoginView