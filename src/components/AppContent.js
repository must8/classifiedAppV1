
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    PrivateRoute
  } from 'react-router-dom';
import { HomeContainer } from '../containers/HomeContainer';
import { SubCategoryContainer } from '../containers/SubCategoryContainer';
import NoMatch from '../components/NoMatch';
import { ProductContainer } from '../containers/ProductContainer';
import Login from '../components/Login';
import { myCartContainer } from '../containers/myCartContainer';
import Checkout from '../components/checkout';
import MyProfile from '../components/Myprofile'
import Protected from '../components/Protected'


class AppContent extends Component {
    render() {
    return (   
        <div className="app-container">
            <Switch>
                <Route exact path="/" component={HomeContainer} /> 
                <Route path="/home" component={HomeContainer} />
                <Route path="/subcategory/products/" component={ProductContainer} />
                <Route path="/subcategory/" component={SubCategoryContainer} />
                <Route path="/login" component={Login} />
                <Route path="/mycart" component={myCartContainer} />
                <Route path="/profile" component={MyProfile} />
                <Route path="/checkout" component={Checkout} />
                <Route component={NoMatch} />
            </Switch>
        </div>
        )

    }
}

export default AppContent;