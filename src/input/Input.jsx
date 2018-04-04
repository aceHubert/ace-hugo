import React from "react";
import {Component, PropTypes} from '../../libs';
import calcTextareaHeight from './calcTextareaHeight'

export default class Input extends Component { 

  constructor(props) {
    super(props);
    this.state = {
      textareaStyle: { resize: props.resize },
      focus: false
    }
  }

  componentDidMount() {
    this.resizeTextarea();
  }

  fixControlledValue =(value)=> {
    if(typeof value === 'undefined' || value === null) {
      return '';
    }
    return value;
  }

  handleChange=(e)=>{
    const {onChange} = this.props;
    if (onChange) 
      onChange(e.target.value);
    this.resizeTextarea();
  }

  handleFocus=()=> {
    const {onFocus} = this.props;
    this.setState({focus: true});
    if (onFocus) 
      onFocus(e)
  }

  handleBlur=(e)=> {
    const {onBlur} = this.props;
    this.setState({focus: false});
    if (onBlur) 
      onBlur(e)
  }

  handleIconClick=()=> {
    const {onIconClick} = this.props;
    if (onIconClick) {
      onIconClick()
    }
  }

  resizeTextarea=()=> {
    const { autosize, type } = this.props;

    if (!autosize || type !== 'textarea') {
      return;
    }

    const minRows = autosize.minRows;
    const maxRows = autosize.maxRows;
    const textareaCalcStyle = calcTextareaHeight(this.refs.textarea, minRows, maxRows);
    this.setState({
      textareaStyle: Object.assign({}, this.state.textareaStyle, textareaCalcStyle)
    });
  }

  render() {
    const {
      type,
      colorType,
      prepend,
      append,
      icon,
      iconPre,
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
      , this.props.disabled && `${rootclass}--disabled`
      , (prepend || append) && `${rootclass}-group`); 

      delete otherProps.resize;
      delete otherProps.style;
      delete otherProps.autosize;
      delete otherProps.onIconClick;

    if(type == 'textarea'){
      return (
        <div style={this.style()} className={this.className(classname)}>
          <textarea { ...otherProps }
            ref="textarea"
            className="el-textarea__inner"
            style={this.state.textareaStyle}
            rows={rows}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          ></textarea>
        </div>
      )
    }else{
      return (
        <div style={this.style()} className={this.className(classname)}>
          { prepend && <div className="el-input-group__prepend">{prepend}</div> }
          { typeof icon === 'string' ? <i className={this.classNames('el-input__icon',iconPre&&'el-input__icon--pre',`el-icon-${icon}`)} onClick={this.handleIconClick.bind(this)}>{prepend}</i> : icon }
          <input {...otherProps}
            ref="input"
            type={type}
            className="el-input__inner"
            autoComplete={autoComplete}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            />
          { append && <div className="el-input-group__append">{append}</div> }  
        </div>
      )
    }
  }
}

Input.propTypes = {
  // base
  type: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  iconPre:PropTypes.bool,
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
  onIconClick: PropTypes.func
}


Input.defaultProps = {
  type: 'text',
  autosize: false,
  rows: 2,
  autoComplete: 'off',
  iconPre:false
}