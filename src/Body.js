import React from 'react';
import './Body.css';
import { Link } from "react-router-dom";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      employeeBody: this.props.employee,
    }
  }


  getName = () => {
    const { employee, add } = this.props;
    const {employeeBody} = this.state;
    return employee.map(name => (
      <div className='item'>
        <Link className="link" to={`/user/${name.id}`}>
          <div onClick={() => add(name)} key={name.id}>
            <img className="img"
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
    this.filterNames(inputValue);
    console.log(this.state.employeeBody)
  }

  filterNames (inputValue) {
  const { employee } = this.props;
  this.setState({
    employeeBody: employee.filter(item => 
       item.name.includes(inputValue))
  });
  }

  render() {
    return (
    <div>
      <div className="body">
        {this.getName()}
      </div> 
      <div className='input'>
        <input type="text" onChange={this.getValueInput} /> 
      </div>
    </div>
    )
  }
}

export default Body;