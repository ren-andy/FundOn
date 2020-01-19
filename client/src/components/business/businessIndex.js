import React, { Component } from "react";
import axios from "axios";
import Mediacard from "../Mediacard"
import Dashboard from "../Dashboard"

class Business extends Component {
    state = {
        // businessName: null,
        businessGoal: null,
        businessLogo: null,
    }
    componentDidMount() {
        axios
            .get("/api/business")
            .then(res => {
                let goal = null;
                let logo = null;
                for (const business in res) {
                    if (business.name == this.props.companyName) {
                        goal = business.goal;
                        logo = business.logo;
                        break;
                    }
                }
                this.setState({ businessGoal: goal})
                // if (res.data.businessName == this.props.companyName) {
                //     this.setState({
                //         businessName: this.props.name,
                //         businessGoal: res.data.businessGoal
                //     })
                // }
            })
            .catch(err => console.error(err));
    }
    render() {
        console.log(this.state, this.props);
        const business = this.state.businessGoal !== null ?
            <Dashboard businessName={this.props.companyName} businessGoal={this.state.businessGoal}
                        businessLogo={this.props.businessLogo} />
            :
            (<div className="none"><p>No business</p></div>)

        return (
            <div className="card-display">
                {business}
            </div>
        );
    }
}

export default Business;