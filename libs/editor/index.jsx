/* @flow */

import React, { Component } from 'react'
import type { Node } from 'react'
import CodeMirror from 'codemirror'

import 'codemirror/mode/jsx/jsx'
import 'codemirror/keymap/sublime'
import 'codemirror/addon/comment/comment'

import 'codemirror/lib/codemirror.css'
import './style.scss'

type Props = {
  onChange: Function,
  value: string
};

export default class Editor extends Component<Props> {

  editor: ?HTMLDivElement;
  cm: any;
  timeout: any;

  componentDidMount(): void {
    const { onChange, value } = this.props

    this.cm = CodeMirror(this.editor, {
      mode: 'jsx',
      theme: 'react',
      keyMap: 'sublime',
      viewportMargin: Infinity,
      lineNumbers: true,
      dragDrop: false
    })

    this.cm.setValue(value)

    this.cm.on('changes', (cm: any) => {
      if (onChange) {
        clearTimeout(this.timeout);

        this.timeout = setTimeout(() => {
          onChange(cm.getValue());
        }, 300);
      }
    })
  }

  render(): Node {
    return <div className="editor" ref={(div: ?HTMLDivElement) => (this.editor = div)} />
  }
}


