import React from 'react';
import { Link } from 'react-router-dom';
import 'react-widgets/dist/css/react-widgets.css'
import Multiselect from 'react-widgets/lib/Multiselect';
import { Field, reduxForm } from 'redux-form'



    
        
        
        
        const renderFlowOptionsMultiSelect = ( { input, data } ) => {
            
            return (
                <Multiselect {...input}
                data={data}
                value={input.value || []}
                onBlur={()=>input.onBlur()}
                />
            )

                
            
        }


    const NewFlowForm = (props) => {



    const containerStyle = {
        padding: '10px',
        width: "60%"
    }
    //selectable departments
    // const deptOptions = ['Warehouse', 'Customer Service','Sales','Procurement','Inventory Control'];
    //optional flow stages
    const flowOptions = ['Not Started','Backlogged','Blocked','In Progress','Awaiting Response','Complete'];
    const { handleSubmit, reset } = props

    const buttonGroupStyle = {
        display: 'flex',
        justifyContent: 'space-around'
    }

    //validation constants

   

    
    
    return (
        <div className="container" style={containerStyle} >
            <Link to="/dashboard">Back</Link>
            <form onSubmit={handleSubmit}>
                <div className="form-group" >
                    <label>Flow Name</label>
                    <Field
                    className="form-control"
                    name="name"
                    component="input"
                    type="text"
                    placeholder="Name Your Flow"
                    autoComplete="false"
                    
                    
                    />
                   
                    
                </div>
                {/* <div className="form-group">
                    <label>Associated Departments</label>
                    <Field
                    name='departments'
                    component={renderDeptOptionsMultiSelect}
                    data={deptOptions}
                    valueField="value"
                    textField="text"
                    />
                </div> */}
                <div className="form-group">
                    <label>Flow Stages</label>
                    <Field
                    name='stages'
                    component={renderFlowOptionsMultiSelect}
                    data={flowOptions}
                    
                    />
                </div>
                <div style={buttonGroupStyle}>
                    <button type="button" className="btn btn-warning" onClick={reset}>
                    Reset Values
                    </button>
                    <button type="submit" className="btn btn-success">Submit</button>
                </div>

            </form>
        
        </div>
    )
}



export default reduxForm({
    form: 'flow'
  })(NewFlowForm);