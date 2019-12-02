import React from "react";
import { Route, Redirect } from "react-router-dom";
import NotFound from '../views/NotFound'
export default function PrivateRoute({
  render: Component,
  authenticated,
  user,
  isStudent,
  ...rest
}) 
{
  console.log(authenticated)
  console.log("loggin student")
  console.log(isStudent)
  console.log(user)
  if (authenticated === false) {
    return <Route {...rest} render={() => <Redirect to="/login"/>}/>
  } else if (authenticated === true && isStudent === false) {
    return <Route component={NotFound}/>
  } else {
  return (
    <Route
      {...rest}
      render={props => 
          <Component {...props} {...rest} user = {user}/>
      }
    />
  );
  }
}