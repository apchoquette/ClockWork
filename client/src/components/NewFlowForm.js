import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select'




class NewFlowForm extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            departments: null,
            stages: []
        }
    }

    renderForm() {

        const options = [
            {value: 'warehouse', label: 'Warehouse'},
            {value: 'cs', label: 'Customer Service'},
            {value: 'sales', label: 'Sales'},
            {value: 'procurement', label: 'Procurement'},
            {value: 'ic', label: 'Inventory Control'}
        ]

        return (
            <form >
                    <div className="form-group">
                        <label>Name Your Flow</label>
                        <input className="form-control form-control-lg" type="text" placeholder="Flow Name" onChange={(e)=> this.setState({name: e.target.value})} value={this.state.name} ></input>
                    </div>
                    <div className="form-group">
                        <label>Departments</label>
                        
                        <Select
                        value={this.state.departments}
                        onChange={(selectedOption)=> this.setState({departments: selectedOption})}
                        options={options}
                        isMulti={true}
                        />

                        <label>Flow Stages (list up to 4)</label>
                    </div>

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

export default NewFlowForm;