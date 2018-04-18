export const loadStyleString = (css, id = '') => {
  if (document.getElementById(id)) return;
  let style = document.createElement('style');
  style.type = 'text/css';
  style.id = id;
  try {
    style.appendChild(document.createTextNode(css));
  } catch (ex) {
    style.styleSheet.cssText = css;
  }
  const head = document.getElementsByTagName('head')[0];
  head.appendChild(style);
}


let isServer = false;
/* istanbul ignore next */
export const on = (function() {
  if (!isServer && document.addEventListener) {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler);
      }
    };
  }
})();

/* istanbul ignore next */
export const off = (function() {
  if (!isServer && document.removeEventListener) {
    return function(element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false);
      }
    };
  } else {
    return function(element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler);
      }
    };
  }
})();

export function scrollIntoView(container, selected) {
  if (isServer) return;

  if (!selected) {
    container.scrollTop = 0;
    return;
  }

  const top = selected.offsetTop;
  const bottom = selected.offsetTop + selected.offsetHeight;
  const viewRectTop = container.scrollTop;
  const viewRectBottom = viewRectTop + container.clientHeight;

  if (top < viewRectTop) {
    container.scrollTop = top;
  } else if (bottom > viewRectBottom) {
    container.scrollTop = bottom - container.clientHeight;
  }
}

export function pointerX(event: Event): number
{ 
  if (isServer) return 0;
  return event.pageX || (event.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft)); 
} 

export function pointerY(event: Event): number
{ 
  if (isServer) return 0;
  return event.pageY || (event.clientY + (document.documentElement.scrollTop || document.body.scrollTop)); 
} 

export function getOffset(el: HTMLElement){
  if(el.getBoundingClientRect){
    return getOffsetRect(el);
  }else{
      return getOffsetSum(el);
  }
}

function getOffsetSum(ele){
  var top= 0,left=0;
  while(ele){
      top+=ele.offsetTop;
      left+=ele.offsetLeft;
      ele=ele.offsetParent;
  }
  return {
      top:top,
      left:left
  }
}

function getOffsetRect(ele){
  var box=ele.getBoundingClientRect();
  var body=document.body,
      docElem=document.documentElement;
  //获取页面的scrollTop,scrollLeft(兼容性写法)
  var scrollTop=window.pageYOffset||docElem.scrollTop||body.scrollTop,
      scrollLeft=window.pageXOffset||docElem.scrollLeft||body.scrollLeft;
  var clientTop=docElem.clientTop||body.clientTop,
      clientLeft=docElem.clientLeft||body.clientLeft;
  var top=box.top+scrollTop-clientTop,
      left=box.left+scrollLeft-clientLeft;
  return {
      //Math.round 兼容火狐浏览器bug
      top:Math.round(top),
      left:Math.round(left)
  }
}
