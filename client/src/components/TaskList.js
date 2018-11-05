import React from 'react';
import * as flowActions from '../redux/actions/flow';
import stageSelector from '../selectors/stageSelector';
import { connect } from 'react-redux';
import moment from 'moment';

const TaskList = (props) => {


    

    console.log(props)
    return (

        <div>
            {props.task.map((task)=>{
                return (
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">{task.taskName}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Requested {moment(task.createdAt).fromNow()}</h6>
    
    
                        </div>
                
                    </div>
                )
            })}
           
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return ({
        task: stageSelector(state.activeFlow.task,props.stage)
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