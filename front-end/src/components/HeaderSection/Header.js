import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { sessionCheck, logOut } from "../../redux/actions/auth/loginActions"

class Header extends Component {
    
    googleTranslateElementInit () {
        new window.google.translate.TranslateElement({pageLanguage: 'auto', layout: window.google.translate.TranslateElement.FloatPosition.TOP_LEFT}, 'google_translate_element')
    }

    componentDidMount(){
        this.props.sessionCheck();
        var addScript = document.createElement('script');
        addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');        
        document.body.appendChild(addScript);  
        window.googleTranslateElementInit = this.googleTranslateElementInit;
    }
    logOut() {
        this.props.logOut();
    }
    render() {
        return (
            <header className="navbar navbar-sticky navbar-expand-lg navbar-dark">
                <div className="container position-relative">
                    <a className="navbar-brand" href="/">
                        <img className="navbar-brand-regular" src={this.props.imageData} style={{height : "80px"}} alt="brand-logo" />
                        <img className="navbar-brand-sticky" src="/img/Logo/logo.png" style={{height : "80px"}} alt="sticky brand-logo" />
                    </a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="navbarToggler" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="navbar-inner">
                        {/*  Mobile Menu Toggler */}
                        <button className="navbar-toggler d-lg-none" type="button" data-toggle="navbarToggler" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <nav>
                            <ul className="navbar-nav" id="navbar-nav">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" href="/#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Features</a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li>
                                            <Link className="dropdown-item" to="/absence">Absence</Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/presence">Presence</Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/shifts">Shifts</Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/communication">Communication</Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/document-sharing">Document sharing</Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/digital-signature">Digital signature</Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/reporting">Reporting</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/clients">Clients</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/prices">Prices</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/aboutus">About us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/resources">Resources</Link>
                                </li>
                                {/* <li style={{display : this.props.authUser ? this.props.authUser.isSession ? "none" : "block" : "block"}} className="nav-item">
                                    <Link className="nav-link" to="/signup" title="Signup">Singup</Link>
                                </li> */}
                                {
                                    this.props.authUser.authData ? 
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            {this.props.authUser.authData.first_name + " " + this.props.authUser.authData.last_name}
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                <li>
                                                    <Link to="dashboard" className="dropdown-item">Go to dashboard</Link>
                                                </li>
                                                <li>
                                                    <button className="dropdown-item" onClick={()=>this.logOut()}>Logout</button>
                                                </li>
                                            </ul>
                                        </li>
                                    : 
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/signin" title="Signin">Signin</Link>
                                    </li>
                                }
                                <li className="nav-item" style={{alignSelf: "center"}}>
                                    <span className="translate">
                                        <div id="google_translate_element"></div>
                                    </span>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        authUser : state.auth.login
    }
}

export default connect(mapStateToProps, {sessionCheck, logOut})(Header);