import React from 'react';
import './Body.css';
import { Link } from "react-router-dom";
import axios from 'axios';

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      employee: []
    }
  }


  componentDidMount() {
    axios
      .get("http://127.0.0.1:3004/employee")
      .then(response => this.setState({ employee: response.data }));
  }


  getName = () => {
    const { employee, add } = this.state;
    const {input} = this.state;
    return employee.filter(employee => employee.name.includes(input)).map(name => (
      <div className='item' key={name.id}>
        <Link className="link" to={`/user/${name.id}`}>
          <div onClick={() => add(name)} key={name.id}>
            <img className="img" alt="imgstatic"
              src={`https://picsum.photos/${name.id}`}
            />
          </div>
          <h1 className="name2"> {name.name} </h1>
        </Link>
      </div>
    ));
  };


  getValueInput = (evt) => {
    const inputValue = evt.target.value;
    this.setState({ input: inputValue });
  }

  render() {
    return (
    <div>
      <h4 className="manager"> Hello {this.props.currentManager}, here be all employees available for change. </h4>
      <div className="body">
        {this.getName()}
      </div> 
      <div className='input'>
        <input placeholder='Search name here' type="text" onChange={this.getValueInput} /> 
      </div>
    </div>
    )
  }
}

export default Body;