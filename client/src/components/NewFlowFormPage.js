import React from 'react';
import * as flowActions from '../redux/actions/flow';
import { connect } from 'react-redux';
import NewFlowForm from './NewFlowForm';
import { withRouter } from 'react-router';




const NewFlowFormPage = ({ form, createFlow,history }) => {
    
    const submitHandler = async () => {
        const { name, departments, stages } = form.values
        
        //creates a new flow in MongoDB database
        await createFlow({
           name,
           departments,
           stages
        })

        history.push('/dashboard');
    }

    const containerStyle = {
        boxShadow: "1px 1px 2px lightgray",
        width: "100%",
        padding: "10px",
        position: "relative",
        top: "150px"
    }

    return (
        <div className="container bg-light" style={containerStyle}>
            <NewFlowForm onSubmit={submitHandler}/>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        form: state.form.flow
    }
}

export default connect(mapStateToProps,flowActions)(withRouter(NewFlowFormPage));

    

    


