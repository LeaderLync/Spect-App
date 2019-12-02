import React, {Component} from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import StudentSurvey from './views/StudentSurvey/StudentSurvey';
import CompanySurvey from './views/CompanySurvey/CompanySurvey';
import NotFound from "./views/NotFound"
import StudentProfile from "./views/StudentProfile/StudentProfile"
import Login from './views/Login'
import auth from './config/firebaseauth';
import PrivateRoute from './components/PrivateRoute'
import Signup from './views/Signup'
import CompanyProfile from './views/CompanyProfile/CompanyProfile';
import api from './api'
import Matches from './views/Matches/Matches';
import PrivateCompanyRoute from './components/PrivateCompanyRoute'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      authenticated: false,
      currentUser: null,
      isStudent: false,
      userinfo: {},
      collectionid: '0'
    }
    // sessionStorage.setItem("isStudent", JSON.stringify(false))
    // sessionStorage.
  }
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      console.log("BIG HIT")
      console.log(user)
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false,
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false,
        })
      }
    })
  }
  userUpdate() {
    console.log("HEY")
    sessionStorage.setItem("isStudent", JSON.stringify(!this.state.isStudent))
    this.setState({
      isStudent: !this.state.isStudent
    })
  }
  userInfoUpdate(value) {
    console.log("has hit")
    this.setState({
      userinfo: value
    })
    sessionStorage.setItem("userinfo", JSON.stringify(value))

  }
  collectionIdUpdate(value) {
    this.setState({
      collectionid: value
    })
    sessionStorage.setItem("collectionid", JSON.stringify(value))

  }

  render() {
    if(this.state.loading) {
      return (<p>It is still loading</p>)
    } else {
      return (
        <div style={{height: '100%'}}>
          <Switch>
            {/****************************************************************************
            Use render instead of component in order to pass props into the react-router
            *****************************************************************************/}
            <PrivateRoute exact path="/"
              render={(props) => <Matches {...props} mystate={this.state} userinfo={JSON.parse(sessionStorage.getItem("userinfo"))} isStudent={JSON.parse(sessionStorage.getItem("isStudent"))}/>}
              authenticated={this.state.authenticated}
              user={this.state.currentUser}
              isStudent={JSON.parse(sessionStorage.getItem("isStudent"))}
            />
            <PrivateRoute exact path="/StudentSurvey"
              render={(props) => <StudentSurvey {...props} mystate={this.state} userInfoUpdate={this.userInfoUpdate.bind(this)}/>}
              authenticated={this.state.authenticated}
              user={this.state.currentUser}
              collectionId={JSON.parse(sessionStorage.getItem("collectionid"))}
              isStudent={JSON.parse(sessionStorage.getItem("isStudent"))}
            />
            <PrivateCompanyRoute exact path="/CompanySurvey"
              render={(props) => <CompanySurvey {...props} mystate={this.state} userInfoUpdate={this.userInfoUpdate.bind(this)}/>}
              authenticated={this.state.authenticated}
              user={this.state.currentUser}
              collectionId={JSON.parse(sessionStorage.getItem("collectionid"))}
              isStudent={JSON.parse(sessionStorage.getItem("isStudent"))}
            />
            <PrivateCompanyRoute exact path="/CompanyProfile" render={(props) =>
              <CompanyProfile {...props} mystate={this.state}/>}
              authenticated={this.state.authenticated}
              user={this.state.currentUser}
              isStudent={JSON.parse(sessionStorage.getItem("isStudent"))}

            />
            <PrivateRoute exact path="/studentprofile" render={(props) =>
              <StudentProfile
                {...props}
                mystate={this.state}
                userinfo={JSON.parse(sessionStorage.getItem("userinfo"))}
                isStudent={JSON.parse(sessionStorage.getItem("isStudent"))}
              />
              }
              authenticated={this.state.authenticated}
              user={this.state.currentUser}
              isStudent={JSON.parse(sessionStorage.getItem("isStudent"))}
            />
            <Route exact path="/login" render={(props) =>
              <Login {...props }
                isStudent={JSON.parse(sessionStorage.getItem("isStudent"))}
                userUpdate={this.userUpdate.bind(this)}
                userInfoUpdate={this.userInfoUpdate.bind(this)}
                collectionIdUpdate={this.collectionIdUpdate.bind(this)}
              />}/>
            <Route exact path="/signup" render={(props) => <Signup {...props }
              isStudent={JSON.parse(sessionStorage.getItem("isStudent"))}
              userUpdate={this.userUpdate.bind(this)}
              collectionIdUpdate={this.collectionIdUpdate.bind(this)}/>}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      );
    }
  }
}

export default App;
