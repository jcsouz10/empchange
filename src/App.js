import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import axios from 'axios';
import Body from './Body';
import User from './User';
import Header from './Header';


class AppRouter extends React.Component {
  state = {
    employeeCurrent: [],
    employee: []
  };

  componentDidMount() {
    axios
      .get("http://127.0.0.1:3004/employee")
      .then(response => this.setState({ employee: response.data }));
  }


  // trocar essa linha;
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
              <Body
                {...props}
                add={this.add}
                employee={this.state.employee}
                employeeCurrent={this.state.employeeCurrent}
              />
            )}
          />
          <Route
            path="/user/:id"
            component={props => (
              <User
                {...props}
                employee={this.state.employee}
                employeeCurrent={this.state.employeeCurrent}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}
export default AppRouter;