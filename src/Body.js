import React from 'react';
import './Body.css';
import axios from 'axios';
import Filter from './Filter';
import Employee from './Employee';

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: []
    }
  }

  componentDidMount() {
    axios
      .get("http://127.0.0.1:3004/employee")
      .then(response => this.setState({ employee: response.data }));
  }

  render() {
    return (
      <div>
        <h4 className="manager"> Hello {this.props.currentManager}, here be all employees available for change. </h4>
        <div className='input'>
          <Filter render={filter => <Employee filter={filter} employee={this.state.employee} />} />
        </div>
      </div>
    )
  }
}

export default Body;