import React, { Component } from 'react';
import axios from 'axios';

class MainLandingPage extends Component {

    state = {
        response: ''
    };

    componentDidMount() {
        this.callApi()
        .then(res => this.setState({response: res.server }))
        .catch(err => console.log(err));
        


    }

    callApi = async () => {
        const response = await axios.get('/api/test')
    
        
        if(response.status !== 200) throw Error(response.message)
        
        return response.data

        }
    
   
    

    render(){
        


        
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
                    <p>{this.state.response}</p>
                    
                </div>
                
            </div>
        )

    }
    
}

export default MainLandingPage;
