import React, { Component } from 'react';
import FlowList from './FlowList'; 
import Flows from './Flows';

class FlowDashboard extends Component {

    render() {

        const rowStyle = {
            height: "100vh"
        }

        const mainStyle = {
            margin: "10px 0px 10px 0px"
        }

        return (
            <div className="container row mh-100 mw-100" style={rowStyle}>
                
                <div className="col-2 mh-100 bg-white">
                    <Flows />

                </div>
                <div className="col-10 text-center h-100 " style={mainStyle}>
                    {/* <FlowMetrics /> */}
                    <FlowList/>
                </div>
                
                

                </div>
        )
    }
}

export default FlowDashboard;