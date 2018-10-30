import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
    renderContent(props) {

        switch(this.props.auth){
            case null:
                return <p /> 
            case false:
                return (<a className="btn btn-outline-success float-right" href='http://localhost:4000/api/auth/google' type="button">Sign In</a>)
            default:
           
                return (
                    <a className="btn btn-outline-danger float-right" href='http://localhost:4000/api/logout' type="button">Sign Out</a>
                    )
        }
        
    }

    renderUser(props) {
        
        return(
            this.props.auth && <small>Welcome, {this.props.auth.firstName}</small>
            
        )
    }
    
    render() {

        const navbarStyle = {
            boxShadow: "0 1px 2px lightgray",
            zIndex: "102"
        }

        
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top" style={navbarStyle}>
                <Link className="navbar-brand" to='/dashboard'><span className="oi oi-clock" title="oi-clock"></span></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                        <Link to='/dashboard'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        
                    </ul>
                    
                    
                    
                </div>
                <div className="nav-item">
                
                    {this.renderContent()}
                    {this.renderUser()}
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
        
    }
}

export default connect(mapStateToProps)(Header);
