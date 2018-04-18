/* @flow */

import React from "react";
import type { Element, Node } from "react";
import {Component} from '../../libs';
import calcTextareaHeight from './calcTextareaHeight'

type Props ={
   // base
   type: string,
   colorType: string,
   icon: Element<any> | string,
   iconPre: boolean,
   disabled: boolean,
   name: string,
   placeholder: string,
   readOnly: boolean,
   autoFocus: boolean,
   maxLength: number,
   minLength: number,
   defaultValue: any,
   value: any,
   autoComplete: string,
 
   // type=='input'
   size: null | 'small' | 'large',
   prepend: Node,
   append: Node,
 
   // type=='textarea'
   autosize: boolean | Object ,
   rows: number,
   resize: 'none' | 'both' | 'horizontal' | 'vertical',
 
   // event
   onFocus: Function,
   onBlur: Function,
   onChange: Function,
   onIconClick: Function
};

type State ={
  textareaStyle: {resize: boolean | Object},
  focus: boolean;
};

export default class Input extends Component<Props,State> { 

  static defaultProps = {
    type: 'text',
    autosize: false,
    rows: 2,
    autoComplete: 'off',
    iconPre:false
  }

  constructor(props: Props){
    super(props)

    this.state = {
      textareaStyle: { resize: this.props.resize },
      focus: false
    }
  }

  componentDidMount(): void {
    this.resizeTextarea();
  }

  /* <Instance Methods */

  focus(): void {
    setTimeout(() => {
      (this.refs.input || this.refs.textarea).focus();
    });
  }
  
  blur(): void {
    setTimeout(() => {
      (this.refs.input || this.refs.textarea).blur();
    });
  }
  
  /* Instance Methods> */
  fixControlledValue =(value: any): any=> {
    if(typeof value === 'undefined' || value === null) {
      return '';
    }
    return value;
  }

  handleChange=(e: SyntheticEvent<HTMLInputElement>): void=>{
    (e.currentTarget: HTMLInputElement);
    const {onChange} = this.props;    
    if (onChange) 
      onChange(e.currentTarget.value);
    this.resizeTextarea();
  }

  handleFocus=(e: SyntheticEvent<HTMLInputElement>): void=> {
    const {onFocus} = this.props;
    this.setState({focus: true});
    if (onFocus) 
      onFocus(e)
  }

  handleBlur=(e: SyntheticEvent<HTMLInputElement>): void=> {
    const {onBlur} = this.props;
    this.setState({focus: false});
    if (onBlur) 
      onBlur(e)
  }

  handleIconClick=(): void=> {
    const {onIconClick} = this.props;
    if (onIconClick) {
      onIconClick()
    }
  }

  resizeTextarea=(): void=> {
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
      size,
      icon,
      iconPre,
      autoComplete,
      rows,
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
      , size && `${rootclass}--${size}`
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
          <s className="focus-border border-1"></s>
          <s className="focus-border border-2"></s>
          <s className="focus-border border-3"></s>
          <s className="focus-border border-4"></s>      
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
          <s className="focus-border border-1"></s>
          <s className="focus-border border-2"></s>
          <s className="focus-border border-3"></s>
          <s className="focus-border border-4"></s> 
        </div>
      )
    }
  }
}

