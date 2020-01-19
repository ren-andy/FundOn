import React, { Component } from "react";
import axios from "axios";
import Mediacard from "../Mediacard"

class Business extends Component {
    state = {
        business: []
    }
    componentDidMount() {
        axios
            .get("/api/business")
            .then(res => {
                this.setState({
                    business: res.data
                })
            })
            .catch(err => console.error(err))
    }
    render() {
        const business = this.state.business.length !== 0 ? (
            this.state.business.map(bs => {
                console.log(bs)
                return (
                    <Mediacard className="card-margin" businessName={bs.businessName} businessGoal={bs.businessGoal}
                     businessLogo={bs.businessLogo}/>
                )
            })
        ) : (<div className="none"><p>No business</p></div>)
        return (
            <div className="card-display">
                {business}
            </div>
        );
    }
}

export default Business;