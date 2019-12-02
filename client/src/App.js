import React, {Component} from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home"
import StudentSurvey from './views/StudentSurvey/StudentSurvey';
import CompanySurvey from './views/CompanySurvey/CompanySurvey';
import NotFound from "./views/NotFound"
//import Header from "./components/Header/Header"
import StudentProfile from "./views/StudentProfile/StudentProfile"
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import CompanyCard from "./components/CompanyCard"
import Login from './views/Login'
import auth from './config/firebaseauth';
import PrivateRoute from './components/PrivateRoute'
import Signup from './views/Signup'
import CompanyProfile from './views/CompanyProfile/CompanyProfile';
import api from './api'
import Matches from './views/Matches/Matches';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      authenticated: false,
      currentUser: null,
      isStudent: false,
      userinfo: null,
      collectionid: '0'
    }
  }
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        })
      }
    })
  }
  userUpdate() {
    this.setState({
      isStudent: !this.state.isStudent
    })
  }
  userInfoUpdate(value) {
    this.setState({
      userinfo: value
    })
  }
  collectionIdUpdate(value) {
    this.setState({
      collectionid: value
    })
    console.log("updating " + this.state.collectionid)


  }

  render() {
    if(this.state.loading) {
      return (<p>It is still loading</p>)
    } else {
      return (
        <div style={{height: '100%'}}>
          <Switch>
            <PrivateRoute exact path="/" render={(props) => <Home {...props} mystate={this.state}/>} authenticated={this.state.authenticated} user={this.state.currentUser}/>
            <PrivateRoute exact path="/Home" render={(props) => <Home {...props} mystate={this.state}/>} authenticated={this.state.authenticated} user={this.state.currentUser}/>
            <PrivateRoute exact path="/StudentSurvey" render={(props) => <StudentSurvey {...props} mystate={this.state}/>} authenticated={this.state.authenticated} user={this.state.currentUser} collectionId={this.state.collectionid}/>
            <PrivateRoute exact path="/CompanySurvey" render={(props) => <CompanySurvey {...props} mystate={this.state}/>} authenticated={this.state.authenticated} user={this.state.currentUser} collectionId={this.state.collectionid}/>
            <PrivateRoute exact path="/CompanyProfile" render={(props) => <CompanyProfile {...props} mystate={this.state}/>} authenticated={this.state.authenticated} user={this.state.currentUser}/>
            <PrivateRoute exact path="/Matches" component={Matches} authenticated={this.state.authenticated} user={this.state.currentUser}/>
            <Route exact path="/">
              <Redirect to="/Home" />
            </Route>
            {/* <Route exact path="/signup" component={Signup}/> */}
            <Route exact path="/login" render={(props) =>
              <Login {...props }
                isStudent={this.state.isStudent}
                userUpdate={this.userUpdate.bind(this)}
                userInfoUpdate={this.userInfoUpdate.bind(this)}
                collectionIdUpdate={this.collectionIdUpdate.bind(this)}
              />}/>
            <Route exact path="/signup" render={(props) => <Signup {...props } isStudent={this.state.isStudent} userUpdate={this.userUpdate.bind(this)} collectionIdUpdate={this.collectionIdUpdate.bind(this)}/>}/>
            {/* Used render instead of component in order to pass props into the react-router */}
            <Route exact path="/studentprofile" render={() => <StudentProfile userinfo={this.state.userinfo}/>} />
            <Route component={NotFound}/>
          </Switch>
        </div>
      );
    }
  }
}

export default App;
