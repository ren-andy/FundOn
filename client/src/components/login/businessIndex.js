import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import BusinessIndex from '../business/businessIndex'

class Login extends Component {
    state = {
        name: '',
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
                console.log(res.data.isInvalidEmail);
                this.setState({
                    isInvalidEmail: res.data.isInvalidEmail,
                    isInvalidPassword: res.data.isInvalidPassword
                })
            })
            .catch(err => console.error(err));

    }

    errorMessage = () => {
        if (this.state.isInvalidEmail) { return <p>This business does not exist!</p> }
        else if (this.state.isInvalidPassword) { return <p>Wrong Password!</p> }
        else if (this.state.isInvalidEmail == null && this.state.isInvalidEmail == null) { return <p></p> }
        else { 
            this.props.history.push({
                pathname: "/dashboard",
                search: `?name=${encodeURIComponent(this.state.name)}`,
            });
         }
    }


    render() {
        return (
            <div className="center">
                <h2>Business Log In</h2>
                <div className="row">
                    <form className="col s12" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Business Name:</label>
                            <input className="form-control" placeholder="Enter business name" id="name" value={this.state.name} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Email:</label>
                            <input className="form-control" placeholder="Enter email" id="email" value={this.state.email} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input className="form-control" placeholder="Enter password" id="password" value={this.state.password} onChange={this.handleChange} />
                        </div>
                        {this.errorMessage()}
                        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Log in</button>
                    </form>
                    <Link to="/businessRegister">Don't have account?</Link>
                </div>
            </div>
        );
    }
}

export default Login;