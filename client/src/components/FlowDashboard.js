import React, { Component } from 'react';
import axios from 'axios';
import FlowList from './FlowList'; 
import FlowMetrics from './FlowMetrics';
import Flows from './Flows';
import { connect } from 'react-redux';
import * as flowActions from '../redux/actions/flow';

class FlowDashboard extends Component {
    
    componentWillMount(props){
        this.props.fetchFlows()
    }
    
    render(props) {

        const rowStyle = {
            height: "100vh"
        }

        const navStyle = {
            boxShadow: "0 1px 2px lightgray"
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




export default connect(null,flowActions)(FlowDashboard);