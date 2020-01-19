import React, { Component } from "react";
import axios from "axios";

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
            .catch(err => console.error(err));
    }
    render() {
        const business = this.state.business.length !== 0 ? (
            this.state.business.map(bs => {
                return (
                    <div>
                        <p>{bs.name}</p>
                        <p>{bs.goal}</p>
                    </div>
                )
            })
        ) : (<div className="none"><p>No business</p></div>)
        return (
            <div>
                {business}
            </div>
        );
    }
}

export default Business;