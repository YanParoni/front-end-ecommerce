import React, { Component } from 'react';


export default  class IncreaseBtn extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }

 
  render() {
    return (
      <div>
        <button type="button">
          <img
            className="w-9 h-9 "
            src="./imgs/add.png"
            onClick={this.props.onClick}
          />
        </button>
      </div>
    );
  }
}


