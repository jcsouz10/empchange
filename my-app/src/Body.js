import React from 'react';
import './Body.css';
import { Link } from "react-router-dom";

class Body extends React.Component {
    getName = () => {
      const { employee, add } = this.props;
      return employee.map(name => (
        <div className='item'>
            <Link className="link" to={`/user/${name.id}`}>
            <div  onClick={() => add(name)} key={name.id}>
            <img className="img"
              src={`https://picsum.photos/${name.id}`}
            />
            </div>
            <h1 className="name2"> {name.name} </h1>
            </Link>
        </div>
      ));
    };
  
    render() {
      return <div className="body">{this.getName()}</div>;
    }
  }
  
export default Body;