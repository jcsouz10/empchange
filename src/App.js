import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import axios from 'axios';
import Body from './Body';
import User from './User';
import Header from './Header';
import Login from './Login';


class AppRouter extends React.Component {
  state = {
    employeeCurrent: [],
    employee: [],
    currentManager: '',
  };

  componentDidMount() {
    axios
      .get("http://127.0.0.1:3004/employee")
      .then(response => this.setState({ employee: response.data }));
  }

  currentManager = e => {
    this.setState({
      currentManager: e,
    })
  }

  add = name => {
    this.setState(prevState => {
      const copy = prevState.employeeCurrent.slice(1);
      copy.push(name);
      return {
        employeeCurrent: copy
      };
    });
  };

  render() {
    return (
      <Router>
        <div className="router">
          <Header />
          <Route
            exact
            path="/"
            render={props => (
              <Login
                {...props}
                currentManager={this.currentManager}
              />
            )}
          />
          <Route
            exact
            path="/home"
            render={props => (
              <Body
                {...props}
                add={this.add}
                employee={this.state.employee}
                employeeCurrent={this.state.employeeCurrent}
                currentManager={this.state.currentManager}

              />
            )}
          />
          <Route
            path="/user/:id"
            component={User}
          />
        </div>
      </Router>
    );
  }
}
export default AppRouter;