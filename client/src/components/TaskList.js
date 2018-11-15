import React from 'react';
import * as flowActions from '../redux/actions/flow';
import stageSelector from '../selectors/stageSelector';
import { connect } from 'react-redux';
import moment from 'moment';
import { FaArrowRight, FaArrowLeft, FaBan } from 'react-icons/fa';

const TaskList = (props) => {


    

    console.log('tasklist props', props)

    const cardStyle = {
        margin: "5px"
    }

    const newTaskButtonStyle = {
        textDecoration: 'blue',
        cursor: 'pointer'
    }

    const renderAddTaskLink = () => {
        if(props.index===0) {
            return (
                <div className="card text-white bg-primary mb-3" style={cardStyle}>
                            <div className="card-body">
                                <h5 className="card-title"><a style={newTaskButtonStyle}onClick={props.openModal}>Create New Task</a></h5>
                            </div>        
                        </div> 
            )
        }
    }

    const incrementStage = {
        stage: props.flow[props.index+1]
    }

    const decrementStage = {
        stage: props.flow[props.index-1]

    }

    return (

        <div>
            {renderAddTaskLink()}
            {props.task.map((task)=>{
                return (
                    <div key={task.id}>
                        <div className="card" style={cardStyle}>
                            <div className="card-body">
                            <small class="card-subtitle mb-2 text-muted">Requested {moment(task.createdAt).fromNow()}</small>
                                <h5 className="card-title">{task.taskName}</h5>
                                {/* increment button disabled when in last index position*/}
                                {props.index!==props.flow.length-1 
                                ? <button className="btn btn-success float-right" onClick={()=>props.changeFlowTaskStatus(props.id,task._id,incrementStage)}><FaArrowRight /></button>
                                : <button className="btn btn-success float-right disabled"><FaArrowRight /></button>
                                }
                                <button className="btn btn-danger" onClick={()=>props.deleteFlowTask(props.id,task._id)}><FaBan /></button>
                                {/* decrement button disabled when in first index position*/}
                                {props.index!==0 
                                ? <button className="btn btn-warning float-left" onClick={()=>props.changeFlowTaskStatus(props.id,task._id,decrementStage)}><FaArrowLeft /></button>
                                : <button className="btn btn-warning float-left disabled" ><FaArrowLeft /></button>
                                }
                            </div>        
                        </div>
                    </div>
                )
            })}
           
        </div>
    )
}

//stageSelector filters tasks by the current task list stage. 

const mapStateToProps = (state, props) => {
    return ({
        task: stageSelector(state.activeFlow.task,props.stage),
        flow: state.activeFlow.stages
    })
}

export default connect(mapStateToProps,flowActions)(TaskList);



//FOR DEBUGGING
// const mapStateToProps = (state) => {
//     return ({
//         tasks: state.activeFlow.task
//     })
// }

// export default connect(mapStateToProps)(TaskList);