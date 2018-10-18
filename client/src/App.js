import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MainLandingPage from './components/MainLandingPage';


class App extends Component {
  render() {
    return (
      <div className="container-fluid">
          <Header />
          <MainLandingPage />
      </div>
    );
  }
}

export default App;
