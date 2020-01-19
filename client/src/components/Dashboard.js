import React, { Component } from "react";
import queryString from "query-string";
import axios from "axios";
import { Link } from 'react-router-dom';
import ActualDashBoard from './templates/ActualDashboards'

class Dashboard extends Component {
  state = {
    name: null,
    goal: null,
    userJoined: 0,
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
              console.log({goal: res.data[i]})
              console.log(this.state.userJoined)
              this.setState({ goal: res.data[i].businessGoal, userJoined: res.data[i].userJoined});
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
        <ActualDashBoard businessName={this.state.name} businessGoal={this.state.goal} />
      </div>
    ) : <div className="center">
        <br></br>
        You haven't posted any business. Please post your business by clicking:
        <br></br>
        <Link to="/createBusiness">Post Business</Link>
        </div>
  }
}

export default Dashboard;