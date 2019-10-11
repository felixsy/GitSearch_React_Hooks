import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Users from "./component/Users";
import User from './component/User';
import Navbar from "./component/Navbar";
import Search from './component/Search';
import Alert from './component/Alert';
import About from './component/pages/About';
import Footer from './component/footer';
import axios from 'axios';


const App =()=> {

  const [ loading, setLoading] = useState(false);
  const [ users, setUsers] = useState([]);
  const [ user, setUser] = useState({});
  const [ alert, setAlert] = useState(null);
  

  // searches for guthub users
  const searchUsers = async (text) => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setLoading(false);
    setUsers(res.data.items);    
  }

  const getUser = async (username) =>{
    setLoading(true);
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
    setLoading(false);
    setUser(res.data); 
  }

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   this.setState({ users: res.data, loading: false});
  // }

  // clear users
  const clearUser = () => {
    setLoading(false);
    setUsers([]); 
  }

  //set alert if text is empty
  const getAlert = (msg, type) => {
    setAlert({ msg, type });

    setTimeout(() => {
      setAlert(null);
    }, 5000);
  }

    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container app-height">
            <Alert alert={alert} />
            <Switch>
              <Route exact path="/" render={props => (
                <Fragment>
                  <Search searchUsers={searchUsers} clearUser={clearUser} showClear={users.length > 0 ? true : false}
                    setAlert={getAlert} />
                  <div className="row">
                    <Users users={users} loading={loading} />
                  </div>
                </Fragment>
              )} />

              <Route exact path="/about" component={About}/>
              <Route exact path="/user/:login" render={props =>(
                <User {...props} getUser={getUser} user={user} loading={loading}/>
              )}/>
            </Switch>
          </div>
          <Footer/>
        </div>
      </Router>
    );
  
}

export default App;








