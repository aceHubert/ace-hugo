import React, { Component } from 'react';

class Input extends Component{

  render(){
    return (
      <input type={this.props.type||"text"}></input>
    );
  }
}

export default Input