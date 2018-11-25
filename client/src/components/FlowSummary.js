import React from 'react';
import { connect } from 'react-redux';

const FlowSummary = (props) => {

    console.log(props)
    return (
        <div className="container-fluid">
            <div id="activeTasks#">
            {props.flow && <h4>You currently have {props.flow.length} active {props.flow.length===1 ? "flow," : "flows,"} # tasks due today, # tasks due this week and # tasks past due.</h4>}
            </div>
            <div id="calendar">
            
            </div>
        
        
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        flow: state.flow

    }
    
}
export default connect(mapStateToProps)(FlowSummary);