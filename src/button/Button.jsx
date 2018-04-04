import React from "react";
import {Component, PropTypes} from '../../libs';


export default class Button extends Component {
  
  handleClick=(e)=>{
    const {loading,onClick}= this.props;
    if(!loading&&onClick){
      onClick();
    }
  }
  render(){
    const{type,size,icon,iconPos,nativeType,loading,disabled} = this.props;

    return (
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
  }
}

Button.propTypes={
  type: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.string,
  iconPos:PropTypes.bool,
  nativeType: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick:PropTypes.func
}

Button.defaultProps={
  nativeType:'button',
  iconPos:false,
  loading:false,
  disabled:false
}