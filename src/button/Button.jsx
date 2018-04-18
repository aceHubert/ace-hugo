/* @flow */

import React from "react";
import {Component} from '../../libs';
import Ripple from '../ripple'

type Props ={
  type: string,
  size: string,
  icon: string,
  iconPos: boolean,
  nativeType: string,
  loading: boolean,
  disabled: boolean,
  ripple: boolean,
  onClick: Function
};

export default class Button extends Component<Props> {

  static defaultProps={
    nativeType:'button',
    iconPos:false,
    loading:false,
    disabled:false,
    ripple:false,
  };
  
  handleClick=(e: SyntheticEvent<HTMLButtonElement>)=>{
    const {loading,onClick}= this.props;
    if(!loading&&onClick){
      onClick(e);
    }
  }
  render(){
    const{type,size,icon,iconPos,nativeType,loading,disabled,ripple} = this.props;

    const button = (
      <button style={this.style()} 
        className={this.className('el-button', type&&`el-button--${type}`,size&&`el-button--${size}`,{
              'is-disabled':disabled,
              'is-loading':loading
            })}
        type={nativeType}
        disabled={disabled}
        onClick={this.handleClick}
          >
        {loading&&<i className="el-button__icon el-icon-loading"></i>}  
        {icon&&!loading&&<i className={this.classNames('el-button__icon',iconPos&&'el-button__icon--pos', `el-icon-${icon}`)}></i>}  
        {this.props.children &&<span>{this.props.children}</span>}
      </button>
    )

   
    if(ripple)
      return (
        <Ripple className="el-ripple-button">
          {button}
        </Ripple>
      )
    else
      return button
    }
}

