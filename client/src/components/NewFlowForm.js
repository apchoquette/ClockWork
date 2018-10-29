import React, { Component } from 'react';
import * as flowActions from '../redux/actions/flow'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import Select from 'react-select';





class NewFlowForm extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            departments: null,
            stages: null
        }
    }

    submitHandler(e, {createFlow}) {
        e.preventDefault();
        const { name, departments, stages } = this.state

        console.log(name);
        console.log(departments);
        console.log(stages);
        
        createFlow({
            name,
            departments,
            stages
        });
        
    }

    renderForm() {

        const deptOptions = [
            {value: 'warehouse', label: 'Warehouse'},
            {value: 'cs', label: 'Customer Service'},
            {value: 'sales', label: 'Sales'},
            {value: 'procurement', label: 'Procurement'},
            {value: 'ic', label: 'Inventory Control'}
        ]

        const flowOptions = [
            {value: 'notstarted', label: 'Not Started'},
            {value: 'backlogged', label: 'Backlogged'},
            {value: 'blocked', label: 'Blocked'},
            {value: 'inprogress', label: 'In Progress'},
            {value: 'awaitingres', label: 'Awaiting Response'},
            {value: 'complete', label: 'Complete'}
        ]

        return (
            <form onSubmit={(e) => this.submitHandler(e,flowActions)}>
                    <div className="form-group">
                        <label>Name Your Flow</label>
                        <input className="form-control form-control-lg" type="text" placeholder="Flow Name" onChange={(e)=> this.setState({name: e.target.value})} value={this.state.name} ></input>
                    </div>
                    <div className="form-group">
                        <label aria-describedby="depthelp">Departments</label>
                        
                        <Select
                        value={this.state.departments}
                        onChange={(selectedOption)=> this.setState({departments: selectedOption})}
                        options={deptOptions}
                        isMulti={true}
                        closeMenuOnSelect={false}
                        />
                        <small id="depthelp" className="form-text text-muted">Select all associated with this flow.</small>

                        <label aria-describedby="flowhelp">Flow Stages</label>
                        
                        <Select
                        value={this.state.stages}
                        onChange={(selectedOption)=> this.setState({stages: selectedOption})}
                        options={flowOptions}
                        isMulti={true}
                        closeMenuOnSelect={false}
                        />
                        <small id="flowhelp" className="form-text text-muted">List up to 4, in flow order.</small>
                    </div>
                    <button type="submit">Create your flow!</button>

                </form>
        )
    }

    render() {

        const containerStyle = {
            padding: '10px'
        }
        return (
            <div className="container" style={containerStyle} >
                <Link to="/dashboard">Back</Link>
                {this.renderForm()}

                </div>
            
        )
    }
}

export default connect(null, flowActions)(NewFlowForm);