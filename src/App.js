import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route, useMatch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/layout/users/Users';
import User from './components/layout/users/User';
import Search from './components/layout/users/Search';
import Alert from './components/layout/Alert';
import { About } from './components/pages/About';
import axios from 'axios';
import './App.css';
import UserItem from './components/layout/users/UserItem';


//class based component
class App extends Component {

  state = {
    users: [],
    user: {},
    loading: false,
    alert: null
  };

  // async componentDidMount(){

  //   this.setState({loading: true});

  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
  //   &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //   this.setState({users: res.data, loading: false});
  //   }

  // To search for a user
  searchUsers = async text => {
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    // console.log(res.data);
    this.setState({ users: res.data.items, loading: false });
  }

  //To get a single user
  getUser = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ user: res.data, loading: false });
  }

  //To clear the state
  clearUsers = () => this.setState({ users: [], loading: false });

  //To throw an alert when there is an empty search
  setAlert = (msg, type) => {
    this.setState({
      alert: {
        msg: msg,
        type: type
      }
    })

    //clear the alert from 
    setTimeout(() => {
      this.setState({ alert: null });
    }, 3000)
  }

  render() {

    // Destructuring the state's properties
    const { loading, users, user } = this.state;

    return (
      // Using JSX to render the output
      <Router>
        <div className="App">
          <Navbar />
          <div className='container'>

            <Routes>
              <Route exact path='/' element={
                 <Fragment>
                  {/* <Alert alert={this.state.alert} /> */}
                  <Search
                    searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                    showClear={users.length > 0 ? true : false}
                    setAlert={this.setAlert}
                  />
                  <Users loading={loading} users={users} />
                </Fragment>}
              />
              <Route
                exact path='/about' element={<About />}
              />
              <Route exact path={`user/:login`} element = {
                  <User
                    getUser = {this.getUser}
                    user = {user}
                  />
              } />
            </Routes>

          </div>
        </div>
      </Router>
    );
  }
}
export default App;
