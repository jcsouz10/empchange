import React from 'react';
import './User.css';
import axios from 'axios';

class User extends React.Component {
  constructor() {
    super();
    
    this.state = {
      newValue: "",
    }
  }
  
  onSubmitDate =  event => {
    const newUrl = prompt("Please with new URL:");
    const personCurrent = event.target.value;
    axios.patch(`http://localhost:3004/employee/${personCurrent}`, {
    url_git: newUrl
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
}


render() {
  return <div className='render'>
  {this.props.employeeCurrent.map(name => <div>
    <div className='profile'>
    <img className="img2" src={`https://picsum.photos/${name.id}`} />
    <div className='name'>
    <h3>{name.name}</h3>
    <p> {name.position} </p>
    </div>
    </div>
    <div className='container'>
    <div className='item2'>   Manager: {name.manager} </div>
    <div className='item2'>   Site: {name.site} </div>
    <div className='item2'>   Start Day: {name.start_day}  </div>
    <div className='item2'>   GitHub:<a className='item2Link' href={`${name.url_git}`}>{name.url_git} </a>  <button className='itembtt' onClick={this.onSubmitDate} id={name.id} value={name.id}> Edit </button> </div>
    <div className='item2'>   CellPhone: {name.cellphone} <button onClick={this.teste}> Edit </button> </div>
    <div className='item2'>   End Day: {name.end_day}</div>
    </div>
    </div>)}
    </div>;
  }
}
export default User; 