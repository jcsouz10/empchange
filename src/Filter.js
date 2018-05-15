import React from 'react';
import './Filter.css';


class Filter extends React.Component {
  constructor() {
    super();

    this.state = {
      input: ''
    }
  }

  getValueInput = (evt) => {
    const inputValue = evt.target.value;
    this.setState({ input: inputValue });
    console.log();

    console.log(this.state.input)
  }


  render() {
    return (
      <div>
        <div className="bodyFilter">
          {this.props.render(this.state.input)}
        </div>
          <input placeholder='Search name here' type="text" onChange={this.getValueInput} />
      </div>
    )
  }
}

export default Filter