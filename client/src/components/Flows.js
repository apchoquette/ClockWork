import React from 'react';
import { Link } from 'react-router-dom';

const Flows = () => {

    const flowStyle = {
        padding: "10px"
    }
    const newButtonStyle = {
        left: "225px",
        bottom: "50px"
    }
    return (
        <div className="container-fluid text-center h-100" style={flowStyle}>
            Flows
            <Link to="/newflow"  style={newButtonStyle}><button className="btn btn-lg btn-success position-fixed">+</button></Link>
        </div>
    )
}

export default Flows;