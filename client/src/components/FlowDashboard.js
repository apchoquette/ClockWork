import React, { Component } from 'react';
import FlowList from './FlowList'; 
import { Link } from 'react-router-dom'
import FlowMetrics from './FlowMetrics';
import Flows from './Flows';

class FlowDashboard extends Component {
    render(props) {

        const rowStyle = {
            height: "100vh"
        }

        const navStyle = {
            "box-shadow": "0 1px 2px lightgray"
        }

        console.log(props);

        

        const newButtonStyle = {
            right: "75px",
            bottom: "75px"
        }
        return (
            <div className="container row mh-100 mw-100" style={rowStyle}>
                
                <div className="col-2 mh-100 bg-light" style={navStyle}>
                    <Flows />

                </div>
                <div className="col-10 text-center h-100">
                    <FlowMetrics />
                    <FlowList />
                </div>
                
                

                </div>
        )
    }
}

export default FlowDashboard;