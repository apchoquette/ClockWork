import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as flowActions from '../redux/actions/flow';
// import Calendar from './Calendar';

class FlowSummary extends Component {

    componentWillMount(){
        this.props.fetchAllTasks();
    }

    render() {
        return (
            <div className="container-fluid">
                <div id="activeTasks#">
                {this.props.flow && <h4>You currently have {this.props.flow.length} active {this.props.flow.length===1 ? "flow," : "flows,"} # tasks due today, # tasks due this week and # tasks past due.</h4>}
                </div>
                {/* <div id="calendar">
                    <Calendar />
                </div> */}
            
            
            </div>
        )

    }
    
}

const mapStateToProps = (state) => {
    return {
        flow: state.flow,
        tasks: state.tasks

    }
    
}
export default connect(mapStateToProps, flowActions)(FlowSummary);