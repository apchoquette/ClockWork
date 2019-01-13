import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as authActions from '../redux/actions/auth';


class MainLandingPage extends Component {

    
   
    

    render(){
        


        
        const jumbotronStyle = {
            height: "30vh",
            margin: "10rem 0 3rem 0"
        }

        
        

        
        return (
            <div className="container">
                
                <div className="jumbotron jumbotron-fluid" style={jumbotronStyle}>
                    <div className="container text-center">
                        <h1 className="display-4">ClockWork</h1>
                        <p className="lead">A Simple Task Manager for Work</p>
                        <a className="btn btn-outline-success" href={`http://localhost:4000/api/auth/google`} role="button">Sign In</a>
                    </div>
                    <hr className="my-4"></hr>
                    
                    
                    
                </div>
                
            </div>
        )

    }
    
}

export default connect(null,authActions)(MainLandingPage);
