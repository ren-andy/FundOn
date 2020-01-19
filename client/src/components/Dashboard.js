import React, { Component } from "react";
import queryString from "query-string";
import axios from "axios";
import { Link } from 'react-router-dom';
import ActualDashboard from '../components/template/ActualDashboard'

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
              console.log({ goal: res.data[i].businessGoal });
              this.setState({ goal: res.data[i].businessGoal });
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
        <ActualDashboard businessName={this.state.name}></ActualDashboard>

      </div>
    ) : <div>
        There is no data to show. Please post your business using the following link:
        <br></br>
        <Link to="/createBusiness">Post Business</Link>
      </div>
  }
}

export default Dashboard;