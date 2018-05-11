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
    return null;

    return (
      <div className='render'>
        <div>
          <div className='profile'>
            <img className="img2" src={`https://picsum.photos/${this.state.user.id}`} />
            <div className='name'>
              <h3>{name.name}</h3>
              <p> {name.position} </p>
            </div>
          </div>
          <div className='container'>
            <div className='item2'>   Manager: {name.manager} </div>
            <div className='item2'>   Site: {name.site} </div>
            <div className='item2'>   Start Day: {name.start_day} </div>
            <div className='item2'>   GitHub:<a className='item2Link' href={`http://${name.url_git}`} target="_blank"> {name.url_git} </a> <button onClick={this.editGit}> Edit </button> {this.state.gitShowInput && <div> <input onChange={this.changeGit} value={this.state.inputValueGit} /> <button onClick={this.onSubmitGit} id={name.id} value={name.id}> Send </button></div>} </div>
            <div className='item2'>   CellPhone: {name.cellphone} <button onClick={this.editCell}> Edit </button> {this.state.cellShowInput && <div><input onChange={this.changeCell} value={this.state.inputValueCell} /> <button onClick={this.onSubmitCell} id={name.id} value={name.id}> Send </button></div>}   </div>
            <div className='item2'>   End Day: {name.end_day} <button onClick={this.editDate}> Edit </button> {this.state.dateShowInput && <div><input onChange={this.changeDate} value={this.state.inputValueDate} /> <button onClick={this.onSubmitDate} id={name.id} value={name.id}> Send </button></div>}  </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log('Loaded User');
    console.log(this.props.match.params.id);
    //// fazer um axios com get e setstate para user
  }
}
export default User; 