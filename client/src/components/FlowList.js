import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { withRouter } from 'react-router';


import * as flowActions from '../redux/actions/flow';

class FlowList extends Component {
    constructor(){
        super();
        this.state = {
            isLoading: true,
            flowSelected: false 
        }
    }
    componentDidMount(props) {

        console.log(typeof this.props.match.params.id)

            if(typeof this.props.match.params.id === "string"){
                this.setState({flowSelected: true})
                this.props.fetchFlowById(this.props.match.params.id)
                
                
            }else{
                this.setState({isLoading: false})
                this.setState({flowSelected: false})
            }
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
                {this.state.flowSelected===true && this.props.activeFlow.stages
                ? 
                this.props.activeFlow.stages.map((stage,i)=> {
                    return (<div key={i} className="col-sm" style={stageStyle}>{stage}</div>)
                }) 
                :
                <p></p>
            }
                </div>
            
        )
        
    }

    deleteHandler(id) {
        this.props.match.params && this.props.deleteFlow(id);
        this.props.history.push('/dashboard');
    }

    render() {

        const containerStyle = {
            boxShadow: "0 1px 2px lightgray"
        }

        const newButtonStyle = {
            right: "100px",
            bottom: "50px"
        }

        const deleteButtonStyle = {
            right: "20px",
            top: "20px"
        }
        return (
            
            <div className="container-fluid h-100 bg-light position-relative" style={containerStyle}>
                {this.state.flowSelected===true ? <h1>{this.props.activeFlow.name}</h1> : <p></p>}
                {this.renderList()}
                <button type="button" style={deleteButtonStyle} class="btn btn-dark position-absolute" onClick={()=>this.deleteHandler(this.props.match.params.id)}>Delete Flow</button>
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