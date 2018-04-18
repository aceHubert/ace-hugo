/* @flow */

import React from "react";
import { Component, Transition, View } from '../../libs';

type Props ={  
  closable: boolean,
  type: string,
  color: string,
  onClose?: Function
};

type State ={
  visible: boolean
};

export default class Tag extends Component<Props,State> {

  static defaultProps={
    closable: false
  }

  constructor(props: Props)
  {
    super(props)

    this.state={
      visible:true
    }
  }

  handleClose =(): void=>{
    this.setState({
      visible: false
    }, () => {
      if (this.props.onClose) {
        this.props.onClose();
      }
    });
  }

  render(){
    const {closable,type,color} = this.props;

    return (
      <Transition name="el-zoom-in">
        <View show={this.state.visible}>
          <span
            style={this.style({
              backgroundColor:color
            })}
            className={this.className('el-tag',type&&`el-tag--${type}`,color&&'el-tag--color')}>
            {this.props.children}
            {closable && <i className="el-tag__close el-icon-close" onClick={this.handleClose}></i>}
          </span>
        </View>
      </Transition>
    )
  }
}
