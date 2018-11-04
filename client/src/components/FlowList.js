import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { withRouter } from 'react-router';

import NewTaskForm from './NewTaskForm'
import moment from 'moment';


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
    
    handleSubmit(props) {

        

        const { form,activeFlow,addTaskToFlow,history,match } = this.props


        const taskObj = {
            taskName: form.values.taskName,
            description: form.values.description,
            createdAt: Date.now(),
            requiredBy: form.values.requiredBy,
            stage: activeFlow.stages[0]
        }

        addTaskToFlow(match.params.id,taskObj);

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
                    return (<div key={i} className="col-sm" style={stageStyle}>{stage}
                    </div>)
                }) 
                :
                <p></p>
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
                {this.state.flowSelected===true ? (<h1>{this.props.activeFlow.name}</h1>) : <p></p>}
                {this.renderList()}
                <NewTaskForm onSubmit={this.handleSubmit.bind(this)}/>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        activeFlow: state.activeFlow,
        form: state.form.task
    }
}

export default connect(mapStateToProps,flowActions)(withRouter(FlowList));