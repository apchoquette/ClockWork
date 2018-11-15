import React from 'react'
import { Link } from 'react-router-dom';
import 'react-widgets/dist/css/react-widgets.css'
import Moment from 'moment';
import momentLocalizer from 'react-widgets-moment';
import Multiselect from 'react-widgets/lib/Multiselect';
import { Field, reduxForm } from 'redux-form'
import DateTimePicker from 'react-widgets/lib/DateTimePicker';


const NewTaskForm = (props) => {

    Moment.locale('en');
    momentLocalizer();

    const newTaskFormStyle = {
        width: "100%",
        border: "1px solid lightgray",
        boxShadow: "0px 1px 2px lightgray",
        padding: "10px",
        borderRadius: "5px",
        margin: "none"
    }

    const renderCalendarDropdown = ({ input: { onChange, value } } ) => {
        return (
            <DateTimePicker
            dropUp 
            onChange={onChange}
            time={false}
            value={!value ? null : new Date(value)}
            
            
            />
        )
    }

    const validation = () => {
        
    }



    return (

        <div className="container-fluid" style={newTaskFormStyle}>
            <form onSubmit={props.handleSubmit}>
                
                <div className="form-group">
                    <label>Description</label>
                    <Field
                    className="form-control"
                    name="description"
                    component="input"
                    type="text"
                    placeholder="Description"
                    autocomplete="false"
                    />
                </div>
                <div className="form-group">
                    <label>Due Date</label>
                    <Field 
                    name="requiredBy"
                    component={renderCalendarDropdown}
                    
                    />

                
                </div>
                <button className="btn btn-success" type="submit">Add Task</button>

            </form>
        </div>
    )
}

export default reduxForm({form: "task"})(NewTaskForm)
