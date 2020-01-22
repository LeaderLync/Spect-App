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
  console.log(user)
  console.log(isStudent)
  if (authenticated === false) {
    return <Route {...rest} render={() => <Redirect to="/login"/>}/>
  } else if (authenticated === true && isStudent && user.email !== 'softwareengineering4c@gmail.com') {
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