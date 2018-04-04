import React from "react";
import { Component, PropTypes, Transition, View } from '../../libs';

export default class Tag extends Component {

  constructor(props){
    super(props)

    this.state={
      visible:true
    }
  }

  handleClose =()=>{
    this.setState({
      visible: false
    }, () => {
      if (this.props.onClose) {
        this.props.onClose();
      }
    });
  }

  render(){
    const {closable,type,color,closeTransition,} = this.props;

    return (
      <Transition name="el-zoom-in">
        <View key={this.state.visible} show={this.state.visible}>
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

Tag.propTypes ={
  closable: PropTypes.bool,
  type: PropTypes.string,
  color: PropTypes.string,
  onClose: PropTypes.func
}