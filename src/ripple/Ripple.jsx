/* @flow */

import React from "react";
import {Component} from '../../libs';
import {pointerX,pointerY,getOffset} from '../../libs/utils/dom'

type Props ={
  during: number,
  color: string,
  onClick: Function
};

const wrapStyleDefault = {
  position: 'relative',
  display: 'inline-block',
  overflow: 'hidden',
}

export default class Ripples extends Component<Props>{

  static defaultProps ={
    during: 600,
    color: 'rgba(0, 0, 0, .3)'
  }

  constructor(props: Props){
    super(props)

    this.state = {
      rippleStyle: {
        position: 'absolute',
        borderRadius: '50%',
        opacity: 0,
        width: 35,
        height: 35,
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        backgroundColor: props.color,
      },
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  handleClick= (e: SyntheticMouseEvent<HTMLDivElement>): void=>{
    if (e.stopPropagation) {
      e.stopPropagation()
    }
    (e.currentTarget: HTMLDivElement);
    const { onClick, during } = this.props
    const {
      currentTarget:{ offsetWidth, offsetHeight }
    } = e
    const pageX = pointerX(e)
    const pageY = pointerY(e)
    const offset = getOffset(e.currentTarget)

    const left = pageX - offset.left
    const top = pageY - offset.top
    const size = Math.max(offsetWidth, offsetHeight)

    this.setState({
      rippleStyle: {
        ...this.state.rippleStyle,
        top,
        left,
        opacity: 1,
        transform: 'translate(-50%, -50%)',
        transition: 'initial',
      },
    })

    this.timer = setTimeout(() => {
      this.setState({
        rippleStyle: {
          ...this.state.rippleStyle,
          opacity: 0,
          transform: `scale(${size / 9})`,
          transition: `all ${during}ms`,
        },
      })
    },20)

    if (typeof onClick === 'function') {
      onClick(e)
    }
  }

  render() {

    return (
      <div className={this.className('el-ripple')} style={this.style(wrapStyleDefault)} onClick={this.handleClick}>
        {this.props.children}
        <s style={this.state.rippleStyle} />
      </div>
    )    
  }
}