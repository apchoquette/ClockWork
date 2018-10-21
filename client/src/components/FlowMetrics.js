import React, { Component } from 'react'

const FlowMetrics = () => {

    const style = {
        "margin": "10px 0 10px 0",
        "box-shadow": "0px 1px 2px lightgray"
    }

    return (
        <div className="container-fluid bg-light h-25" style={style}>
            <div className="row h-50">
                <div className="col-4 text-center">
                1
                </div>
                <div className="col-4">
                2
                </div>
                <div className="col-4">
                3
                </div>
            </div>
            <div className="row h-50">
                <div className="col-4">
                4
                </div>
                <div className="col-4">
                5
                </div>
                <div className="col-4">
                6
                </div>
            </div>
            
            </div>
    )
}

export default FlowMetrics;