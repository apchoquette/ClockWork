import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { withRouter } from 'react-router';


import * as flowActions from '../redux/actions/flow';

class FlowList extends Component {
    componentDidMount(props) {

            //request current flow
            this.props.fetchFlowById(this.props.match.params.id);
            
        }

        

        
        
        

    

    renderList(props) {

        const stageStyle = {
            backgroundColor: "lightblue",
            padding: "20px",
            margin: "5px",
            borderRadius: '5px',
            boxShadow: '0px 1px 2px lightgray'
        }

        const rowStyle = {
            padding: "20px"
        }

        return(

            <div className="row" style={rowStyle}>
                {this.props.activeFlow.stages ? this.props.activeFlow.stages.map((stage,i)=> {
                    return (<div key={i} className="col-sm" style={stageStyle}>{stage}</div>)
                }) :
                <p>Loading...</p>
            }
                </div>
            
        )

        
        

       

       

        

       
        
    }

    render() {

        const containerStyle = {
            boxShadow: "0 1px 2px lightgray"
        }

        const newButtonStyle = {
            right: "100px",
            bottom: "50px"
        }
        return (
            <div className="container-fluid h-100 bg-light position-relative" style={containerStyle}>
                {this.props.activeFlow.name ? <h1>{this.props.activeFlow.name}</h1> : <p>Loading</p>}
                {this.renderList()}
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        activeFlow: state.activeFlow
    }
}

export default connect(mapStateToProps,flowActions)(withRouter(FlowList));