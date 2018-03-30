import React from 'react'
import {Component, PropTypes} from '../../libs';

export default class Input extends Component {

  static defaultProps = {
    type: 'text',
    autosize: false,
    rows: 2,
    autoComplete: 'off'
  }

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      focus: false,
      blur: false
    }
  }

  /* Instance Methods> */

  fixControlledValue =()=> {
    if(typeof value === 'undefined' || value === null) {
      return '';
    }
    return value;
  }

  handleChange=(e)=>{
    const {onChange} = this.props;
    if (onChange) 
      onChange(e.target.value);
    
  }

  handleFocus=()=> {
    const {onFocus} = this.props;
    this.setState({focus: true, blur: false});
    if (onFocus) 
      onFocus(e)
  }

  handleBlur=(e)=> {
    const {onBlur} = this.props;
    this.setState({focus: false, blur: true});
    if (onBlur) 
      onBlur(e)
  }

  render() {
    const {
      type,
      colorType,
      prepend,
      append,
      icon,
      autoComplete,
      validating,
      rows,
      onMouseEnter,
      onMouseLeave,
      ...otherProps
    } = this.props;

    if ('value' in this.props) {
      otherProps.value = this.fixControlledValue(this.props.value);
      delete otherProps.defaultValue;
    }

    const rootclass = type === 'textarea' ? 'el-textarea' : 'el-input';
    const classname = this.classNames(rootclass
      , colorType && `${rootclass}--${colorType}`
      , this.state.focus && `${rootclass}--focus`
      , this.state.blur && `${rootclass}--blur`
      , this.props.disabled && `${rootclass}--disabled`
      , (prepend || append) && `${rootclass}-group`);

      delete otherProps.resize;
      delete otherProps.style;
      delete otherProps.autosize;
      delete otherProps.onIconClick;

    if(type == 'textarea'){
      return (
        <div style={this.style()} className={classname}>
          <textarea { ...otherProps }
            ref="textarea"
            className="el-textarea__inner"
            style={this.state.textareaStyle}
            rows={rows}
            onChange={this.handleChange.bind(this)}
            onFocus={this.handleFocus.bind(this)}
            onBlur={this.handleBlur.bind(this)}
          ></textarea>
        </div>
      )
    }else{
      return (
        <div className={classname}>
          <input {...otherProps}
            ref="input"
            type={type}
            className="el-input__inner"
            autoComplete={autoComplete}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            />
        </div>
      )
    }
  }
}

Input.propTypes = {
  // base
  type: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  autoFocus: PropTypes.bool,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  defaultValue: PropTypes.any,
  value: PropTypes.any,
  autoComplete: PropTypes.string,

  // type=='input'
  prepend: PropTypes.node,
  append: PropTypes.node,

  // type=='textarea'
  autosize: PropTypes.oneOfType([ PropTypes.bool, PropTypes.object ]),
  rows: PropTypes.number,
  resize: PropTypes.oneOf(['none', 'both', 'horizontal', 'vertical']),

  // event
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  
}
