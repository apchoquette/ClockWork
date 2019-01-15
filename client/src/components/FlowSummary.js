import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as flowActions from '../redux/actions/flow';
// import Calendar from './Calendar';

class FlowSummary extends Component {

    componentWillMount(){
        this.props.fetchAllTasks();
    }

    

    render() {


        const rowStyle = {
            height: "250px",
            padding: "10px"
        }

        const cardStyle = { 
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }

        

        return (
            <div className="container">

                <div className="row" style = { rowStyle } >
                    <div className="col ">
                        <div className="card" style = { cardStyle } >
                            
                            <h6> {this.props.flow.length} active {this.props.flow.length===1 ? "flow," : "flows"} </h6>
                            
                        </div>
                    
                    </div>
                    <div className="col">
                        <div className="card" style = { cardStyle } >
                            
                            <h6># tasks due today</h6>
                            
                        </div>
                    
                    </div>
                </div>
                <div className="row" style = { rowStyle }>
                    <div className="col">
                        <div className="card" style = { cardStyle } >
                            
                            <h6># tasks due this week</h6>
                            
                        </div>
                    
                    </div>
                    <div className="col">
                        <div className="card" style = { cardStyle } >
                            
                            <h6># tasks past due.</h6>
                            
                        </div>
                    
                    </div>
                </div>

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