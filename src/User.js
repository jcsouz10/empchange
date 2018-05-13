import React from 'react';
import './User.css';
import axios from 'axios';

class User extends React.Component {
  constructor() {
    super();
    
    this.state = {
      gitShowInput: false,
      cellShowInput: false,
      dateShowInput: false,
      
      inputValueGit: '',
      inputValueCell: '',
      inputValueDate: '',
      user: {},
    }
  }
  
  componentDidMount() {
    const user = this.props.match.params.id;
    axios.get(`http://localhost:3004/employee/${user}`)
    .then(response=>{
      this.setState({
        user: response.data,
      })
    })
  }

  editDate = () => {
    this.setState({
      dateShowInput: true
    })
  }

  editGit = () => {
    this.setState({
      gitShowInput: true
    })
  }
  
  editCell = () => {
    this.setState({
      cellShowInput: true
    })
  }
  
  onSubmitGit = event => {
    const { inputValueGit } = this.state
    const personCurrent = event.target.value;
    axios.patch(`http://localhost:3004/employee/${personCurrent}`, {
      url_git: inputValueGit
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    this.setState({
      gitShowInput: !this.state.gitShowInput
    })
  }

  onSubmitCell = event => {
    const { inputValueCell } = this.state;
    const personCurrent = event.target.value;
    axios.patch(`http://localhost:3004/employee/${personCurrent}`, {
      cellphone: inputValueCell
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    this.setState({
      cellShowInput: !this.state.cellShowInput
    })
  }

  onSubmitDate = event => {
    const { inputValueDate } = this.state;
    const personCurrent = event.target.value;
    axios.patch(`http://localhost:3004/employee/${personCurrent}`, {
      end_day: inputValueDate
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });

    this.setState({
      dateShowInput: false
    })
  }

  changeDate = e => {
    this.setState({
      inputValueDate: e.target.value
    });
  };

  changeGit = e => {
    this.setState({
      inputValueGit: e.target.value
    });
  };

  changeCell = e => {
    this.setState({
      inputValueCell: e.target.value
    });
  };

  render() {
    return (
      <div className='render'>
        <div>
          <div className='profile'>
            <img className="img2" src={`https://picsum.photos/${this.state.user.id}`} />
            <div className='name'>
              <h3>{this.state.user.name}</h3>
              <p>{this.state.user.position}</p>
            </div>
          </div>
          <div className='container'>
            <div className='item2'>   Manager: {this.state.user.manager} </div>
            <div className='item2'>   Site: {this.state.user.site} </div>
            <div className='item2'>   Start Day: {this.state.user.start_day} </div>
            <div className='item2'>   GitHub:<a className='item2Link' oi target="_blank"> {this.state.user.url_git} </a> <button onClick={this.editGit}> Edit </button> {this.state.gitShowInput && <div> <input onChange={this.changeGit} value={this.state.inputValueGit} /> <button onClick={this.onSubmitGit} id={this.state.user.id} value={this.state.user.id}> Send </button></div>} </div>
            <div className='item2'>   CellPhone: {this.state.user.cellphone}<button onClick={this.editCell}> Edit </button> {this.state.cellShowInput && <div><input onChange={this.changeCell} value={this.state.inputValueCell} /> <button onClick={this.onSubmitCell} id={this.state.user.id} value={this.state.user.id}> Send </button></div>}   </div>
            <div className='item2'>   End Day: {this.state.user.end_day} <button onClick={this.editDate}> Edit </button> {this.state.dateShowInput && <div><input onChange={this.changeDate} value={this.state.inputValueDate} /> <button onClick={this.onSubmitDate} id={this.state.user.id} value={this.state.user.id}> Send </button></div>}  </div>
          </div>
        </div>
      </div>
    );
  }

}
export default User; 