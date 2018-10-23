import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
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
                <Route path='/' exact 
                render={() => (this.props.auth ? (<Redirect to="/dashboard"/>) :
                (<MainLandingPage/>))} />
                <Route path="/dashboard" exact
                render={() => (this.props.auth ? <FlowDashboard /> : <Redirect to="/"/>)}
                />
                <Route path="/newflow" component={NewFlowForm} />
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
