import React from 'react';
import { connect } from 'react-redux';

import * as flowActions from '../redux/actions/flow';

import { FaArrowRight, FaArrowLeft, FaBan } from 'react-icons/fa';
import moment from 'moment';


const Task = (props) => {

    const { task } = props;
    //styles
    const color = () => {

        
        let countDown = moment(task.requiredBy).diff(moment())/86400000;

        

        let cardStyle = {
            
            backgroundColor: 'white',
            
        }

        if ( countDown <= 1 ){
            
            cardStyle.backgroundColor = 'red'
            
        }else if ( countDown <= 2 ){
            
            cardStyle.backgroundColor = 'orange'
            
        }else if ( countDown <= 3) {
            
            cardStyle.backgroundColor = 'yellow'
            
        }else if ( countDown <= 4) {
            
            cardStyle.backgroundColor = 'lightgreen'
            
        }
        else if ( countDown > 4) {
            
            cardStyle.backgroundColor = 'green'
            
        }

        
        return cardStyle

    }

    const dueDateStyle = {
        paddingTop: "10px"
    }

    const taskStyle = {
        display: "flex",
        justifyContent: "center"
    }
    //action objects
    const incrementStage = {
        stage: props.flow[props.index+1]
    }

    const decrementStage = {
        stage: props.flow[props.index-1]

    }

    const arrowDivStyle = {
        display: "flex",
        width: "10%"
    }

    const arrowStyle = {
        fontSize: '70px'
    }

    
    return (
        <div key={task.id} style={taskStyle}>
            <div id="leftArrow" style = { arrowDivStyle }>
            <i class="fas fa-angle-left align-middle" style={ arrowStyle }></i>
            </div>
            <div className="card" style={color()}>
                <h6 style={dueDateStyle} className="card-subtitle mb-2">Due {moment(task.requiredBy).fromNow()}</h6>
                    <div className="card-body">
                        <h5 className="card-title">{task.description}</h5>
                            {/* increment button disabled when in last index position*/}
                            <div>
                            {props.index!==props.flow.length-1 
                            ? <button className="btn btn-success float-right" onClick={()=>props.changeFlowTaskStatus(props.id,task._id,incrementStage)}><FaArrowRight /></button>
                            : <button className="btn btn-success float-right disabled"><FaArrowRight /></button>
                            }
                            </div>
                            <button className="btn btn-danger" onClick={()=>props.deleteFlowTask(props.id,task._id)}><FaBan /></button>
                            {/* decrement button disabled when in first index position*/}
                            {props.index!==0 
                            ? <button className="btn btn-warning float-left" onClick={()=>props.changeFlowTaskStatus(props.id,task._id,decrementStage)}><FaArrowLeft /></button>
                            : <button className="btn btn-warning float-left disabled" ><FaArrowLeft /></button>
                            }
                            <small class="card-subtitle mb-2 text-muted">Requested {moment(task.createdAt).fromNow()}</small>
                    </div>        
                </div>
            <div id="rightArrow" style = {arrowDivStyle}>
            <i class="fas fa-angle-right align-middle" style={ arrowStyle }></i>
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