import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const Flows = (props) => {

    

    const flowStyle = {
        padding: "10px"
    }
    const newButtonStyle = {
        left: "225px",
        bottom: "50px"
    }
    return (
        <div className="container-fluid text-center h-100  sticky-top" style={flowStyle}>
            <ul className="list-group">
                {props.flow.map((flow) => {return <button key={flow.name} className="list-group-item list-group-item-action">{flow.name}</button>})}
            </ul>
            <Link to="/newflow"  style={newButtonStyle}><button className="btn btn-lg btn-success position-fixed">+</button></Link>
        </div>
    )
}

const mapStateToProps = (state) => {
    
    return {
        flow: state.flow
    }
}

export default connect(mapStateToProps)(Flows);