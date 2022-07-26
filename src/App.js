import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import User from "./components/users/Users";
import axios from "axios";
import "./App.css";

const REACT_APP_GITHUB_CLEINT_ID = "0448feac7c85bc809f58";
const REACT_APP_GITHUB_CLEINT_SECRET =
  "a743de2744dcf1aa9cbf6ebb8b2c9569e279aa52";

//class App extends React.Component { OR
class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    //console.log(REACT_APP_GITHUB_CLEINT_SECRET);
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/users?client_id=${REACT_APP_GITHUB_CLEINT_ID}&client_secret=${REACT_APP_GITHUB_CLEINT_SECRET}`
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
