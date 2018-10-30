import React from 'react';
import * as flowActions from '../redux/actions/flow';
import { connect } from 'react-redux';
import NewFlowForm from './NewFlowForm';




const NewFlowFormPage = ({ form, createFlow }) => {
    
    const submitHandler = () => {
        const { name, departments, stages } = form.values
        
        //creates a new flow in MongoDB database
        createFlow({
           name,
           departments,
           stages
        })
    }
    
    return (
            <NewFlowForm onSubmit={submitHandler}/>
    )

}

const mapStateToProps = (state) => {
    return {
        form: state.form.flow
    }
}

export default connect(mapStateToProps,flowActions)(NewFlowFormPage);

    

    


