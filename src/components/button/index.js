import React, { Component } from 'react';

class Button extends Component{

  render(){
    return (<button type="button">{this.props.children}</button>)
  }
}

export default Button