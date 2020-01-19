import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'

class CreateBusiness extends Component {
    state = {
        businessName: null,
        businessGoal: null,
        businessLogo: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const business = {
            businessName: this.state.businessName,
            businessGoal: this.state.businessGoal,
            businessLogo: this.state.businessLogo
        }
        console.log(business)

        axios
            .post("api/business/register", business)
            .then(res => {
                {
                    return this.props.history.push({
                        pathname: "/dashboard",
                        search: `?name=${encodeURIComponent(this.state.businessName)}`
                    })
                }
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
                <h2>Post Your Business</h2>
                <div className="row">
                    {this.errorMessage()}
                    <form className="col s12" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Business Name:</label>
                            <input aria-required="true" className="validate" placeholder="Enter username" id="businessName" value={this.state.businessName} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Business Goal:</label>
                            <input aria-required="true" className="validate" placeholder="Enter goal" id="businessGoal" value={this.state.businessGoal} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Business Logo:</label>
                            <input aria-required="true" className="validate" placeholder="Paste logo" id="businessLogo" value={this.state.businessLogo} onChange={this.handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Post</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default CreateBusiness;