import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({
  render: Component,
  authenticated,
  user,
  ...rest
}) 
{
  return (
    <Route
      {...rest}
      render={props =>
        authenticated === true ? ( //if (checking for authentication)
          <Component {...props} {...rest} user = {user}/>
        ) : (//else redirect to login
          <Redirect to="/login" />
        )
      }
    />
  );
}