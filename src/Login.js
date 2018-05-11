import React from 'react';
import { Link } from 'react-router-dom'
import './Login.css';

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      currentManager: ''
    }
  }

  getValueLogin = (e) => {
    const value = e.target.value
    this.setState({
      currentManager: value
    })
  }

  render() {
    const { currentManager } = this.props;
    return (
      <div className="bodyLogin">
        <div className='login'>
          <input value={this.state.currentManager} onChange={this.getValueLogin} className='itemLogin' placeholder='Type your ID here' />
          <Link className='link' to="/home"><button onClick={() => currentManager(this.state.currentManager)} className='itemLogin'> Login </button> </Link>
        </div>
      </div>)
  }
}

export default Login;