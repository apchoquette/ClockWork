import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
    renderContent(props) {

        

        switch(this.props.auth){
            case null:
                return <p /> 
            case false:
                return (<a className="btn btn-outline-success float-right" href='http://localhost:4000/api/auth/google' role="button">Sign In</a>)
            default:
           
                return (
                    <a className="btn btn-outline-danger float-right" href='http://localhost:4000/api/logout' role="button">Sign Out</a>
                    )
        }
        
    }

    renderUser(props) {

       
        
        return(
            this.props.auth && <a className="nav-link"><small>Welcome, {this.props.auth.firstName}</small></a>
            
        )
    }


           
        
    
    render() {

        const navbarStyle = {
            boxShadow: "0 1px 2px lightgray",
            zIndex: "102",
            backgroundColor: "lightblue"
        }

        
        return (
           
            <nav className="navbar navbar-expand-lg navbar-light sticky-top" style={navbarStyle}>
                <a className="navbar-brand" ><Link className="navbar-brand" to='/dashboard'>CLOCKWORK</Link></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link"><Link className="nav-link" to='/dashboard'>Home</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"><Link className="nav-link" to="/about">About</Link></a>
                        </li>
                        
                    </ul>
                    
                    
                    
                </div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                    {this.renderUser()}
                    </li>
                <li className="nav-item">
                    {this.renderContent()}
                    
                </li>
                </ul>
            </nav>

                
            
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        flow: state.flow
        
    }
}

export default connect(mapStateToProps)(Header);
