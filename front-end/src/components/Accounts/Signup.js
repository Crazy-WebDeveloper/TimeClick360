import React, { Component } from 'react';
import { connect } from "react-redux"
import { Link } from 'react-router-dom';
import { signupWithJWT } from "../../redux/actions/auth/registerActions";
import { store } from 'react-notifications-component';

class Signup extends Component {
    state = {
        firstName : "",
        lastName : "",
        email : "",
        companyname : "",
        numofemployee : "",
        telephone : "",
        password : "",
        confirmpassword : "",
        accpet : false
    }
    handleSubmit = e => {
        e.preventDefault();
        if (this.state.password !== this.state.confirmpassword) {
            store.addNotification({
                title: "Oops!",
                message: "Incorrect Password!",
                type: "danger",
                insert: "top",
                container: "top-right",
                animationIn: ["animate__animated", "animate__lightSpeedInRight"],
                animationOut: ["animate__animated", "animate__lightSpeedOutRight"],
                dismiss: {
                    duration: 5000,
                    onScreen: true,
                    pauseOnHover: true,
                    showIcon : true
                }
            });
            return;
        }
        let user = {
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            email : this.state.email,
            companyname : this.state.companyname,
            numofemployee : this.state.numofemployee,
            telephone : this.state.telephone,
            password : this.state.password
        }
        this.props.signupWithJWT(user)
    }
    render() {
        return (
            <div className="accounts inner-pages">
                <div className="main">
                    <section id="signIn" className="section welcome-area h-100 bg-overlay d-flex align-items-center overflow-auto">
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-12 col-md-8 col-lg-5">
                                    {/* Contact Box */}
                                    <div className="contact-box bg-white text-center rounded p-4 p-sm-5 shadow-lg">
                                        {/* Contact Form */}
                                        <form id="contact-form" autoComplete="off" onSubmit={(e) => this.handleSubmit(e)}>
                                            <div className="contact-top">
                                                <img src="/img/logo.png" alt="" />
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text"><i className="fas fa-user-circle" /></span>
                                                            </div>
                                                            <input type="text" className="form-control" name="fistname" placeholder="First Name" onChange={(e) => this.setState({ firstName : e.target.value})} required="required" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text"><i className="fas fa-user-circle" /></span>
                                                            </div>
                                                            <input type="text" className="form-control" name="lastname" placeholder="Last Name" onChange={(e) => this.setState({ lastName : e.target.value})} required="required" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text"><i className="fas fa-envelope-open" /></span>
                                                            </div>
                                                            <input type="email" className="form-control" name="email" placeholder="Email" onChange={(e) => this.setState({ email : e.target.value})} required="required" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text"><i className="fas fa-building" /></span>
                                                            </div>
                                                            <input type="text" className="form-control" name="companyname" placeholder="Company or department Name" onChange={(e) => this.setState({ companyname : e.target.value})} required="required" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text"><i className="fas fa-users" /></span>
                                                            </div>
                                                            <input type="number" className="form-control" name="numofemployees" placeholder="Number of employees" onChange={(e) => this.setState({ numofemployee : e.target.value})} required="required" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text"><i className="fas fa-tty" /></span>
                                                            </div>
                                                            <input type="text" className="form-control" name="telephone" placeholder="Telephone" onChange={(e) => this.setState({ telephone : e.target.value})} required="required" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text"><i className="fas fa-unlock-alt" /></span>
                                                            </div>
                                                            <input type="password" className="form-control" name="password" placeholder="Password" onChange={(e) => this.setState({ password : e.target.value})} required="required" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text"><i className="fas fa-unlock-alt" /></span>
                                                            </div>
                                                            <input type="password" className="form-control" name="confirmpassword" placeholder="Confirm Password" onChange={(e) => this.setState({ confirmpassword : e.target.value})} required="required" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <button className="btn btn-bordered w-100 mt-3 mt-sm-4" type="submit">Sign Up</button>
                                                    {/* <Link className="btn btn-bordered w-100 mt-3 mt-sm-4" style={{background: "#007bff", borderRadius: "50px"}} to="/signin">Sign In</Link> */}
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="questionAuth">
                    <Link to="/signin">Click here to SignIn</Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
    //   values: state.auth.login
    }
}

export default connect(mapStateToProps, { signupWithJWT })(Signup)