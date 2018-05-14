import React from 'react';

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
    console.log()
  }


  render() {
    return (
      <div>
        <input placeholder='Search name here' type="text" onChange={this.getValueInput} />
      </div>
    )
  }
}

export default Filter