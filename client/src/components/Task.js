import React from 'react';
import { connect } from 'react-redux';

import * as flowActions from '../redux/actions/flow';

import { FaArrowRight, FaArrowLeft, FaBan } from 'react-icons/fa';
import moment from 'moment';


const Task = (props) => {
    //styles
    
    const cardBodyStyle = {
        display: "flex",
        flexDirection: "column",
        width: "80%"
    }
    
    const cardStyle = {
        margin: "5px",
        display: "flex",
        justifyContent: "space-between"
    }

    const datesStyle = {
        display: "flex",
        justifyContent: "space-between"
    }
    const dueDateStyle = {
        padding: "2px",
        justifyContent: "center"
    }


    const incrementStyle = {
        width: "auto", 
        display: "flex"
    }

    const decrementStyle = {
        width: "auto",
        display: "flex"
    }
    //action objects
    const incrementStage = {
        stage: props.flow[props.index+1]
    }

    const decrementStage = {
        stage: props.flow[props.index-1]

    }

    const setBGColor = (dueDate) => {

        let dateDiff = moment(dueDate).diff(moment(Date.now()),'days');
        if(dateDiff<0){
            return "bg-danger"
        }else if (dateDiff<5 && dateDiff>=0){
            return "bg-warning"
        }else{
            return "bg-light"
        }

    }

    

    const { task } = props;
    return (
        <div key={task.id}>
            
            <div style={cardStyle}>
                <div id="leftArrow" style={decrementStyle}>
                    {props.index!==0 
                    ? <button className="btn btn-warning float-left" onClick={()=>props.changeFlowTaskStatus(props.id,task._id,decrementStage)}><FaArrowLeft /></button>
                    : <button className="btn btn-warning float-left disabled" ><FaArrowLeft /></button>
                    }
                </div>
                    {/* This madness sets the background color if the task is past due. */}
                    <div style={cardBodyStyle} className={setBGColor(task.requiredBy)}>
                        <div style={datesStyle}>
                            <small style={dueDateStyle}>Requested {moment(task.createdAt).fromNow()}</small>
                            <small style={dueDateStyle} >Due {moment(task.requiredBy).fromNow()}</small>
                        </div>
                        <h5 className="card-title">{task.description}</h5>
                        
                            <button className="btn btn-danger" onClick={()=>props.deleteFlowTask(props.id,task._id)}><FaBan /></button>
                            {/* decrement button disabled when in first index position */}
                        
                            
                    </div>

                <div id="rightArrow" style={incrementStyle}>
                    {props.index!==props.flow.length-1 
                    ? <button className="btn btn-success float-right" onClick={()=>props.changeFlowTaskStatus(props.id,task._id,incrementStage)}><FaArrowRight /></button>
                    : <button className="btn btn-success float-right disabled"><FaArrowRight /></button>
                    }              
                </div>
                  
            </div>
                    </div>
    )
}

const mapStateToProps = (state,props) => {
    return ({
        
        flow: state.activeFlow.stages
    })
}

export default connect(mapStateToProps,flowActions)(Task);