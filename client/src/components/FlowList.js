import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FlowList extends Component {
    constructor() {
        super();

        this.state = {
            modalOpen: false,
            objects: [],
            stages: []
        }
    }

    render() {

        const containerStyle = {
            boxShadow: "0 1px 2px lightgray"
        }

        const newButtonStyle = {
            right: "100px",
            bottom: "50px"
        }
        return (
            <div className="container-fluid h-75 bg-light position-relative" style={containerStyle}>
                FlowList
                <button className="btn btn-lg btn-primary position-fixed" style={newButtonStyle}>+</button>
                </div>
        )
    }
}

export default FlowList;