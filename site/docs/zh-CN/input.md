## Input 输入框

通过鼠标或键盘输入字符

### 基础用法

::: demo
```js
render() {
  return <Input placeholder="请输入内容" />
}
```
:::


### 禁用状态

::: demo 通过 `disabled` 属性指定是否禁用 input 组件
```js
render() {
  return <Input disabled placeholder="请输入内容" />
}
```
:::

### 颜色

::: demo 通过 `colorType` 属性指定边框颜色
```js
render() {
  return (
  <div className="el-input-color">
    <Input colorType="primary" placeholder="请输入内容" />
    <Input colorType="succes" placeholder="请输入内容" />
    <Input colorType="info" placeholder="请输入内容" />
    <Input colorType="warning" placeholder="请输入内容" />
    <Input colorType="danger" placeholder="请输入内容" />
  </div> 
  )
}
```
:::


