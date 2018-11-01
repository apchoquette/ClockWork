import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as flowActions from '../redux/actions/flow';



class Flows extends Component {

    componentWillMount(){
        this.props.fetchFlows();
        console.log(this.props.flow)
    }

    
    render() {
        const flowStyle = {
        
            top: "100px",
            position: "fixed", 
            width: "200px"
        }
    
        const leftContainerStyle = {
            paddingTop: "10px"
        }
    
        const newFlowButton = {
            textDecoration: "none !important"
        }
        
        return (
            <div className="container-fluid text-center h-100" style={leftContainerStyle}>
                <ul className="list-group" style={flowStyle}>
                    <li className="list-group-item list-group-item-primary"><strong>Flow List</strong></li>
                    {this.props.flow.map((flow) => {return <a href={`/flow/${flow._id}`}key={flow.name} className="list-group-item list-group-item-action">{flow.name}</a>})}
                    <li className="list-group-item list-group-item-action" role="button" style={newFlowButton}><Link style={newFlowButton} to="/newflow">New Flow</Link></li>
                </ul>
                
            </div>
        )

    }
    
}

const mapStateToProps = (state) => {
    
    return {
        flow: state.flow
    }
}

export default connect(mapStateToProps,flowActions)(Flows);