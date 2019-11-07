import React, {Component} from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home"
import NotFound from "./views/NotFound" 
import Header from "./components/Header/Header"
import Login from './views/Login'
import auth from './config/firebaseauth';
import PrivateRoute from './components/PrivateRoute'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      authenticated: false,
      currentUser: null
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
  
  render() {
    if(this.state.loading) {
      return (<p>It is still loading</p>)
    } else {
      return (
        <div style={{height: '100%'}}>
          <Switch>
            <PrivateRoute exact path="/" component={Home} authenticated={this.state.authenticated} user={this.state.currentUser}/>
            <PrivateRoute exact path="/Home" component={Home} authenticated={this.state.authenticated} user={this.state.currentUser}/>
            {/* <Route exact path="/Home" component={Home} /> */}
            <Route exact path="/">
              <Redirect to="/Home" />
            </Route>
            {/* <Route exact path="/signup" component={Signup}/> */}
            <Route exact path="/login" render={(props) => <Login {...props } isAdmin={false} />}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      );
    }
  }
}

export default App;
