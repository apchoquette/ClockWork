import React, { Component } from 'react';

class Header extends Component {
    render() {

        const navbarStyle = {
            "box-shadow": "0 1px 2px lightgray",
            "z-index": "102"
        }
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={navbarStyle}>
                <a className="navbar-brand" href="#"><span className="oi oi-clock" title="oi-clock"></span></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        
                    </ul>
                    
                    
                    
                </div>
                <div>
                    <button className="btn btn-outline-success float-right" type="button">Sign In</button>
                </div>
            </nav>
        )
    }
}

export default Header;
