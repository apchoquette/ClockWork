import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import FlowDashboard from './components/FlowDashboard';
import Header from './components/Header';
import MainLandingPage from './components/MainLandingPage';
import NewFlowFormPage from './components/NewFlowFormPage';
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
                {/* Send authenticated users directly to dashboard */}
                <Route path='/' exact 
                render={() => this.props.auth ? 
                <Redirect to="/dashboard"/> :
                <MainLandingPage/>} />
                {/* Prevent unauthenticated users from accessing /dashboard */}
                <Route path="/dashboard" exact
                render={() => (this.props.auth ? 
                <FlowDashboard /> : 
                <Redirect to="/"/>)}
                />
                <Route path="/flow/:id" exact component={FlowDashboard}/>
                <Route path="/newflow" component={NewFlowFormPage} />
            </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      auth: state.auth
  }
}

export default connect(mapStateToProps,authActions)(App);
