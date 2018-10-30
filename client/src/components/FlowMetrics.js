import React from 'react';

const FlowMetrics = () => {

    const style = {
        margin: "10px 0 10px 0",
        padding: "10px",
        boxShadow: "0px 1px 2px lightgray"
    }

    return (
        <div className="container-fluid bg-light h-25" style={style}>
            <div className="row h-50">
                <div className="col-4 text-center">
                New Tasks
                </div>
                <div className="col-4">
                Tasks In Progress
                </div>
                <div className="col-4">
                Tasks Completed
                </div>
            </div>
            <div className="row h-50">
                <div className="col-4">
                Average Time to Complete Task
                </div>
                <div className="col-4">
                New Tasks Today
                </div>
                <div className="col-4">
                Completed Tasks Today
                </div>
            </div>
            
            </div>
    )
}

export default FlowMetrics;