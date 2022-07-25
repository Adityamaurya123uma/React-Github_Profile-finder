import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import User from "./components/users/Users";
import axios from "axios";
import "./App.css";

//class App extends React.Component { OR
class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    console.log(process.env.REACT_APP_GITHUB_CLEINT_SECRET);
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/users?client_id=$
      {process.env.REACT_APP_GITHUB_CLEINT_ID}&client_secret=$
      {process.env.REACT_APP_GITHUB_CLEINT_SECRET}`
    );

    this.setState({ users: res.data, loading: false });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <User loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
