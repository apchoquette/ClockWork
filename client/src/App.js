import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Header from './components/Header';
import FlowDashboard from './components/FlowDashboard';
import MainLandingPage from './components/MainLandingPage';
import NewFlowForm from './components/NewFlowForm';
import * as authActions from './redux/actions/auth';



class App extends Component {

  componentWillMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container-fluid">
        <BrowserRouter>
            <div className="container-fluid mh-100">
                <Header />
                <Route path='/' component={MainLandingPage} exact />
                <Route path="/dashboard" component={FlowDashboard} />
                <Route path="/newflow" component={NewFlowForm} />
            </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null,authActions)(App);
