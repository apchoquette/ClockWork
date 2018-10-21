import React, { Component } from 'react';
import FlowList from './FlowList';
import FlowMetrics from './FlowMetrics';

class FlowDashboard extends Component {
    render() {

        const rowStyle = {
            height: "100vh"
        }

        const navStyle = {
            "box-shadow": "0 1px 2px lightgray"
        }

        const flowStyle = {
            padding: "10px"
        }
        return (
            <div className="container row mh-100 mw-100" style={rowStyle}>
                
                <div className="col-2 mh-100 bg-light" style={navStyle}>
                    <div className="container-fluid text-center h-100" style={flowStyle}>
                        flows
                    </div>
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