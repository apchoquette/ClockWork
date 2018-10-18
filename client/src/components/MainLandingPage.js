import React, { Component } from 'react';

class MainLandingPage extends Component {

    

    render(){

        const cardStyle = {
            width: "18rem",
            height: "25rem"
        }

        const jumbotronStyle = {
            height: "60vh",
            margin: "10rem 0 3rem 0"
        }
        return (
            <div className="container">
                <div className="jumbotron jumbotron-fluid" style={jumbotronStyle}>
                    <div className="container">
                        <h1 className="display-4">ClockWork</h1>
                        <p className="lead">A Simple Micro-Project Manager for Teams</p>
                    </div>
                    <hr className="my-4"></hr>
                    <div className="container">
                    <button className="btn btn-primary btn-large">Sign Up</button>
                    </div>
                </div>
                
            </div>
        )

    }
    
}

export default MainLandingPage;
