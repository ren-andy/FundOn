import React, { Component } from "react";
import queryString from "query-string";
import axios from "axios";
import { Link } from 'react-router-dom';

class Dashboard extends Component {
  state = {
    name: null,
    goal: null,
    loading: true,
  }

  componentDidMount() {
    const params = queryString.parse(this.props.location.search);
    if (params.name !== undefined) {
      this.setState({
        name: params.name,
      });
      axios
        .get("/api/business")
        .then(res => {
          console.log(res.data);
          console.log(params.name);
          for (const i in res.data) {
            if (res.data[i].businessName == params.name) {
              console.log({goal: res.data[i].businessGoal});
              this.setState({ goal: res.data[i].businessGoal});
              break;
            }
          }
        })
        .catch(err => console.error(err))
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    // console.log(this.state);
    if (this.state.loading) return <div>Loading...</div>;
    return this.state.goal !== null ? (
      <div>
        Hello, {this.state.name} , {this.state.goal}
      </div>
    ) : <div>
        No business.
        <Link to="/createBusiness">Create Business</Link>
        </div>
  }
}

export default Dashboard;