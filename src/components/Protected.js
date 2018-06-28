import React , { Component } from 'react'
import PrivateComponent from './PrivateComponent';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
  } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (

 
    
    <Route
      render={(props) =>
        true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
  