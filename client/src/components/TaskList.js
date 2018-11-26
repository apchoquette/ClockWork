import React from 'react';

import stageSelector from '../selectors/stageSelector';
import { connect } from 'react-redux';

import Task from './Task'

const TaskList = (props) => {

    const cardStyle = {
        margin: "5px"
    }

    

    const newTaskButtonStyle = {
        color: 'white',
        textDecoration: 'white',
        cursor: 'pointer'
    }

    const renderAddTaskLink = () => {
        if(props.index===0) {
            return (
                <div className="card text-white bg-primary mb-3" style={cardStyle}>
                            <div className="card-body">
                                <h5 className="card-title"><a href="#/" style={newTaskButtonStyle} onClick={props.openModal}>Create New Task</a></h5>
                            </div>        
                        </div> 
            )
        }
    }

    return (

        <div>
            {renderAddTaskLink()}
            {props.task.map((task)=>{
                return (
                    <Task task={task} id={props.id} stage={props.stage} index={props.index}/>
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

export default connect(mapStateToProps)(TaskList);



//FOR DEBUGGING
// const mapStateToProps = (state) => {
//     return ({
//         tasks: state.activeFlow.task
//     })
// }

// export default connect(mapStateToProps)(TaskList);