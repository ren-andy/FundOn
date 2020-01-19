import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'

class Register extends Component {
    state = {
        name: null,
        email: null,
        password: null,
        success: undefined
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
        }
        console.log(user)

        axios
            .post("api/user/register", user)
            .then(res => {
                if (res.data.success) {return this.props.history.push('/login') }
                else (this.setState({
                    success: res.data.success
                }))
            })
            .catch(err => console.error(err));
    }

    errorMessage = () => {

        if (this.state.success === false) { return <p>Auth failed</p> }
        else { return <p></p> }
    }

    render() {
        return (
            <div className="center">
                <h2 className="">Sign Up</h2>
                <div className="row">
                    {this.errorMessage()}
                    <form className="col s12" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Name:</label>
                            <input aria-required="true" className="validate" placeholder="Enter username" id="name" value={this.state.name} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Email:</label>
                            <input aria-required="true" className="validate" placeholder="Enter email" id="email" value={this.state.email} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input aria-required="true" className="validate" placeholder="Enter password" id="password" value={this.state.isInvalidPassword} onChange={this.handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Sign up</button>
                    </form>
                    <Link to="/login">Already have account?</Link>
                </div>
            </div>
        );
    }
}

export default Register;