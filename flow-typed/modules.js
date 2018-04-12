
declare module 'classnames' {
  declare module.exports: (args: any)=> any
  
}

declare module 'raf'{
  declare module.exports: (promise: any)=> any
}

declare module 'babel-standalone'{
  declare module.exports: {
    transform:(arg1: any, arg2: Object)=> any
  }
}

declare module 'codemirror'{
  declare module.exports: (el: any, ops: Object)=> any
}

declare module 'codemirror/mode/jsx/jsx'{
  declare module.exports:any
}

declare module 'codemirror/keymap/sublime'{
  declare module.exports:any
}

declare module 'codemirror/addon/comment/comment'{
  declare module.exports:any
}

declare module 'codemirror/lib/codemirror.css'{
  declare module.exports:any
}

declare module 'prismjs'{
  declare module.exports: {
    highlightAll:()=> void
  }
}

declare module 'react-click-outside' {
  declare module.exports:  {
    (module: any): any
  }
}

declare module 'throttle-debounce/throttle' {
  declare module.exports:  {
    (...args: Array<any>): any
  }
}

declare module 'throttle-debounce/debounce' {
  declare module.exports:  {
    (...args: Array<any>): any
  }
}

declare module 'async-validator' {
  declare class AsyncValidator {
    constructor(options: Object): void;
    validate(...args: Array<any>): void;
  }
  declare module.exports: typeof AsyncValidator;
}


declare module 'marked'{

  declare class Renderer{
    constructor(): void;
    table:(header: any, body: any)=>any
  }

  declare function marked(arg1: any, arg2: any, arg3: any): any;

  declare module.exports: typeof marked;
}
