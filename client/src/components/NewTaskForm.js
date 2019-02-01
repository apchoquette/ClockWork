import React from 'react'
import 'react-widgets/dist/css/react-widgets.css'
import Moment from 'moment';
import momentLocalizer from 'react-widgets-moment';
import { Field, reduxForm } from 'redux-form'
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import moment from 'moment';

const NewTaskForm = (props) => {

    Moment.locale('en');
    momentLocalizer();

    const { handleSubmit } = props

    const newTaskFormStyle = {
        width: "100%",
        border: "1px solid lightgray",
        boxShadow: "0px 1px 2px lightgray",
        padding: "10px",
        borderRadius: "5px",
        margin: "none"
    }

    const renderCalendarDropdown = ({ input: { onChange, value }, meta: { touched, error} } ) => {
        return (
            <div>
                <DateTimePicker
                dropUp 
                onChange={onChange}
                time={false}
                value={!value ? null : moment(value)}
            />
            </div>

        )
    }

    

    const renderForm = () => {
        return (
            <form onSubmit={handleSubmit}>
                
                <div className="form-group">
                    <label>Description</label>
                    <Field
                    className="form-control"
                    name="description"
                    component="input"
                    type="text"
                    placeholder="Description"
                    autoComplete="false"
                    
                    />                </div>
                <div className="form-group">
                    <label>Due Date</label>
                    <Field 
                    name="requiredBy"
                    component={renderCalendarDropdown}
                    
                    />

                
                </div>
                <button className="btn btn-success" type="submit">Add Task</button>

            </form>
        )
    }



    return (

        <div className="container-fluid" style={newTaskFormStyle}>
            {renderForm()}
            
        </div>
    )
}

const validate = (values) => {
    const errors = {};
    if(!values.description){
        errors.description = 'Please enter a description.'
    }else if(values.requiredBy < Date.now()){
        errors.requiredBy = 'Please enter a date in the future. '
    }

}

export default reduxForm({form: "task"},validate)(NewTaskForm)
