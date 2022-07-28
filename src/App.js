import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import User from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
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
    alert: null,
  };

  // async componentDidMount() {
  //   //console.log(REACT_APP_GITHUB_CLEINT_SECRET);
  //   this.setState({ loading: true });

  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${REACT_APP_GITHUB_CLEINT_ID}&client_secret=${REACT_APP_GITHUB_CLEINT_SECRET}`
  //   );

  //   this.setState({ users: res.data, loading: false });
  // }

  // Search github Users
  searchUsers = async (text) => {
    this.setState({ loading: true });
    //console.log(text);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${REACT_APP_GITHUB_CLEINT_ID}&client_secret=${REACT_APP_GITHUB_CLEINT_SECRET}`
    );

    this.setState({ users: res.data.items, loading: false });
  };

  //Clear Users form State
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  //Setting the alert function
  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });
    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  render() {
    const { users, loading } = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Routes>
              <Route
                exact
                path="/"
                render={
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <User loading={loading} users={users} />
                  </Fragment>
                }
              ></Route>
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
