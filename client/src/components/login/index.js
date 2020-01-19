import React, { Component } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

class Login extends Component {
    state = {
        email: '',
        password: '',
        isInvalidPassword: null,
        isInvalidEmail: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password,
        }
        console.log(user)

        axios
            .post("api/user/login", user)
            .then(res => {
                this.setState({
                    isInvalidEmail: res.data.isInvalidEmail,
                    isInvalidPassword: res.data.isInvalidPassword
                })
            })
            .catch(err => console.error(err));

        this.setState({
            email: '',
            password: ''
        })
    }

    errorMessage = () => {
        if (this.state.isInvalidEmail) { return <p>Wrong Email!</p> }
        else if (this.state.isInvalidPassword) { return <p>Wrong Password!</p> }
        else if (this.state.isInvalidEmail == null && this.state.isInvalidEmail == null) { return <p></p>}
        else { return this.props.history.push('/business') }
    }

    render() {
        return (
            <div className="center">
                <h2>Log In</h2>
                <div className="row">
                    <form className="col s12" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Email:</label>
                            <input className="form-control" placeholder="Enter email" id="email" value={this.state.email} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input className="form-control" placeholder="Enter password" id="password" value={this.state.password} onChange={this.handleChange} />
                        </div>
                        {this.errorMessage()}
                        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Sign in</button>
                    </form>
                    <Link to="/register">Don't have account?</Link>
                </div>
            </div>
        );
    }
}

export default Login;