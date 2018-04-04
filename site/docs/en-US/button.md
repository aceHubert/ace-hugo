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
  <div className="el-input-block">
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

### 带Icon输入框

::: demo
```js
handleIconClick(e){

}

render() {
  return <div className="el-input-block">
    <Input icon="time" 
            placeholder="请选择时间" 
            onIconClick={this.handleIconClick.bind(this)} />
    <Input icon="search" iconPre placeholder="搜索关键字" />
  </div>              
}
```
:::

### 复合型输入框

::: demo
```js


render() {
  return <div className="el-input-group-block">
    <Input placeholder="请输入内容" prepend="Http://"/>
    <Input placeholder="请输入内容" append=".com"/>
  </div>              
}
```
:::

### 文本域
可调整大小，用于输入多行文本信息

::: demo
```js
render() {
  return <Input type="textarea"   
                autosize={{ minRows: 2, maxRows: 4}} 
                placeholder="请输入内容" />
}
```
:::


