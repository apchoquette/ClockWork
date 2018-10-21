import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import FlowDashboard from './components/FlowDashboard';
import MainLandingPage from './components/MainLandingPage';


class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <BrowserRouter>
            <div className="container-fluid mh-100">
                <Header />
                <Route path='/' component={MainLandingPage} exact />
                <Route path="/dashboard" component={FlowDashboard} />
            </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
