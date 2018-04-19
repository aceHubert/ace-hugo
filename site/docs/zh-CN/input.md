## Input 输入框

通过鼠标或键盘输入字符

### 基础用法

::: demo
```js
render() {
  return <Input placeholder="请输入内容"/>
}
```
:::


### 禁用状态

::: demo 通过 `disabled` 属性指定是否禁用 input 组件
```js
render() {
  return <Input disabled placeholder="请输入内容"/>
}
```
:::

### 颜色
使用不同颜色来表示输入状态

::: demo 通过 `colorType` 属性指定边框颜色
```js
render() {
  return (
  <div className="demo-input-block">
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

### 尺寸
使用不同尺寸来布局表单

::: demo 通过 `size` 属性设置组件大小
```js
render() {
  return (
  <div className="demo-input-inline">
    <Input size="small" placeholder="请输入内容" />
    <Input placeholder="请输入内容" />
    <Input size="large" placeholder="请输入内容" />
  </div> 
  )
}
```
:::

### 带Icon输入框
通过图标显示输入框的含义

::: demo 通过`icon`设置显示图标，及`onIconClick`钩子添加图标点击事件
```js
handleIconClick(e){

}

render() {
  return <div className="demo-input-block">
    <Input icon="calendar" 
            placeholder="请选择日期" 
            onIconClick={this.handleIconClick.bind(this)} />
    <Input icon="search" iconPre placeholder="搜索关键字" />
  </div>              
}
```
:::

### 复合型输入框
通过前置或后置内置提示并减少用户的固定输入

::: demo 通过`prepend`和`append`添加前置或后置内容
```js
render() {
  return <div className="demo-input-group-block">
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


