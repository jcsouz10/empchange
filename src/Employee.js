import React from 'react';
import { Link } from "react-router-dom";
import './Employee.css';

class Employee extends React.Component {
      getName = () => {
    const { employee, filter } = this.props;
    return employee.filter(employee => employee.name.includes(filter)).map(name => (
      <div className='item' key={name.id}>
        <Link className="link" to={`/user/${name.id}`}>
          <div>
            <img className="img" alt="imgstatic" src={`https://picsum.photos/${name.id}`} />
          </div>
          <h1 className="name2"> {name.name} </h1>
        </Link>
      </div>
    ));
  }
  render () {
    const {render} = this.props
    return(
      <div className='bodyEmployee'>
        {this.getName()}
      </div>
    )
  }
}

export default Employee