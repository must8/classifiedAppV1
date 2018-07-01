import React, { Component } from 'react';
import './libraries/css/global.css'
import './App.css';
import AppContent from './components/AppContent'
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';
import { appStore } from './helpers/store';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={appStore}>
          <div className="App"> 
            <Header />
            <AppContent />
            <Footer />
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
