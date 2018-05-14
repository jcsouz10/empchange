import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Body from './Body';
import User from './User';
import Header from './Header';

class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <div className="router">
          <Header />
          <Route
            exact
            path="/home"
            component={Body}
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