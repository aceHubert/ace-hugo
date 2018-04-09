/* @flow */

import { Component } from 'react';
import type { Node } from 'react';
import { require_condition } from '../utils';

let windowKey = Symbol.for("er_register_map")
const registerMap = window[windowKey] = window[windowKey] || {
  ids: {},
}

const not_null = (t: any) => (t != null)

const hasRegistered = ({id}: {id: string}) => {
  return not_null(registerMap.ids[id])
}

const cleanRegister = (props: any) => {
  const { target, eventName, func, isUseCapture, id } = props
  if (hasRegistered(props)) {
    target.removeEventListener(eventName, func, isUseCapture);
    delete registerMap.ids[id]
  }
}

const doRegister = (props: any) => {
  let { id, eventName, func, isUseCapture } = props
  registerMap.ids[id] = id
  document.addEventListener(eventName, func, isUseCapture)
}

/**
 * register events that hooked up react lifecycle
 */
type Props={
  id: string,
  target: Object,
  eventName: string,
  func: Function,
  isUseCapture: boolean
};

export default class EventRegister extends Component<Props> {

  cached: Object = {};
  
  componentDidMount(): void {
    let { eventName, id } = this.props
    eventName = eventName.toLowerCase()
    eventName = /^on/.test(eventName) ? eventName.substring(2) : eventName
    this.cached = Object.assign({}, this.props, { eventName })

    require_condition(typeof id === 'string', 'id prop is required')
    require_condition(!hasRegistered(this.cached), `id: ${id} has been registered`)

    doRegister(this.cached)
  }

  componentWillUnmount(): void {
    cleanRegister(this.cached)
  }

  render(): Node {
    return null
  }
}
