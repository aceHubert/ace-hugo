## Button 按钮

常用的操作按钮

### 基础用法

::: demo
```js
render() {
  return <div className="el-button-block">
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="text">Text Button</Button>
  </div>
}
```
:::

### 禁用状态

::: demo 通过`disabled`禁用 button 组件
```js
render() {
  return <div className="el-button-block">
    <Button disabled>Default</Button>
    <Button type="primary" disabled>Primary</Button>
    <Button type="text" disabled>Text Button</Button>
  </div>
}
```
:::

### 颜色
使用不同颜色来表示不同含义

::: demo 通过`type`设置组件不同颜色
```js
render() {
  return <div className="el-button-block">
    <Button type="primary">Primary</Button>
    <Button type="succes">Succes</Button>
    <Button type="info">Info</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button>
  </div>
}
```
:::

### Ripple
单击背景添加波纹动画

::: demo 通过`ripple`设置组件单击波纹动画
```js
render() {
  return <div className="el-button-block">
    <Button ripple>Primary</Button>
    <Button type="primary" ripple>Primary</Button>
    <Button type="succes" ripple>Succes</Button>
    <Button type="info" ripple>Info</Button>
    <Button type="warning" ripple>Warning</Button>
    <Button type="danger" ripple>Danger</Button>
  </div>
}
```
:::

### 带图标的按钮
使用图标显示更明确的意义，或减少空间

::: demo 通过`icon`设置图标，``
```js
render() {
  return <div className="el-button-block">
    <Button type="primary" icon="write"></Button>
    <Button type="primary" icon="bin"></Button>
    <Button type="primary" icon="share"></Button>
    <Button type="primary" icon="search">Search</Button>
    <Button type="primary" icon="down" iconPos>Download</Button>
  </div>
}
```
:::

### 加载中
通过加载中状态提示用户

::: demo 通过`loading`设置组件加载状态
```js
render() {
  return <div className="el-button-block">
    <Button type="primary" loading>加载中</Button>
  </div>
}
```
:::

### 尺寸
设置不同的大小，适配布局

::: demo  通过`size`设置不同的大小
```js
render() {
  return <div className="el-button-block">
    <Button type="primary" size="large">大号按钮</Button>
    <Button type="primary">默认</Button>
    <Button type="primary" size="small">小号</Button>
  </div>
}
```
:::

