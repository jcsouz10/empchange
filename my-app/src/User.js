import React from 'react';
import './User.css';

class User extends React.Component {
    
    render() {
      return <div className='render'>
      {this.props.employeeCurrent.map(name=><div>
      <div className='profile'>
        <img className="img2" src={`https://picsum.photos/${name.id}`}/>
        <div className='name'> 
          <h3>{name.name}</h3>
          <p> {name.position} </p>
        </div>
      </div>
        <div className='container'>
          <div className='item2'>  Manager: {name.manager} </div>
          <div className='item2'>   Site: {name.site}  </div>
          <div className='item2'>   Start Day: {name.start_day} </div>
        </div>
      </div>)}
      </div>;
    }
  }
export default User;