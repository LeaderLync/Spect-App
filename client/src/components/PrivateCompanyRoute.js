import React from "react";
import { Route, Redirect } from "react-router-dom";
import NotFound from '../views/NotFound'
export default function PrivateCompanyRoute({
  render: Component,
  authenticated,
  user,
  isStudent,
  ...rest
})
{
  
  if (authenticated === false) {
    return <Route {...rest} render={() => <Redirect to="/login"/>}/>
  } else if (authenticated === true && isStudent === true) {
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
