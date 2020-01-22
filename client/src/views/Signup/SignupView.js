import React from 'react'
import './SignupPage.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/Black-logo-no-background.png'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'


class SignupView extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        selectedFile: null,
        imagePreviewUrl: null,
        file: null
      }
      this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
      
      this.setState({
        file: URL.createObjectURL(event.target.files[0])
      })
    }
    render() {
  
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
      var Greeting = (this.props.isStudent) ? "Student" : "Company"
      return (
        <div className="login-page container-fluid">
          {isStudent}
          <div className="login-modal">
              <img className="spect-logo" src={logo}></img>
              <h4 style={{marginTop: '5px', marginBottom: '5px'}}>{Greeting} Sign Up</h4>
              <form onSubmit={this.props.onSubmit} className="login-form">
                <div style= {{margin: '0 auto'}}>
                <Avatar style={{width: '100px', height: '100px', marginBottom: '10px'}} src={this.state.file}></Avatar>
                </div>
                <label htmlFor="file-upload" className="custom-file-upload" 
                style={{border: '1px solid #ccc', display: 'inline-block', padding: '6px 12px', cursor: 'pointer'}}
                >
                    <i className="fa fa-cloud-upload"></i> Custom Upload
                </label>
                <input type="file" style={{display: 'none'}}
                id="file-upload"
                name="thefile"
                onChange={this.handleChange}/>
               <h6 style={{textAlign: 'left'}}>First Name</h6>
               <input
                  className="input"
                  name="firstname"
                  type="text"
                  placeholder="First Name"
                />
                <h6 style={{textAlign: 'left'}}>Last Name</h6>
                <input
                  className="input"
                  name="lastname"
                  type="text"
                  placeholder="Last Name"
                />
                <h6 style={{textAlign: 'left'}}>Email</h6>
                <input
                  className="input"
                  name="email"
                  type="email"
                  placeholder="Email"
                />
                <h6 style={{textAlign: 'left'}}>Password</h6>
                <input
                  className="input"
                  name="password"
                  type="password"
                  placeholder="Password"
                />
                <button className="button-signin" type="submit">Register</button>
                <Link to="/login" className="link"> 
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