import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewFlowForm extends Component {
    render() {

        const containerStyle = {
            padding: '10px'
        }
        return (
            <div className="container" style={containerStyle} >
                <Link to="/dashboard">Back</Link>
                <form >
                    <div className="form-group">
                        <label>Name Your Flow</label>
                        <input className="form-control form-control-lg" type="text" placeholder="Flow Name" name ></input>
                    </div>
                    <div className="form-group">
                        <label>Add Attendees</label>
                        <select className="form-control form-control-lg">
                            <option>Test Option #1</option>
                            <option>Test Option #2</option>
                        </select>
                    </div>

                </form>

                </div>
            
        )
    }
}

export default NewFlowForm;