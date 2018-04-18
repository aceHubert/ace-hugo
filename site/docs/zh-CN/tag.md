## Tag 标签

用于标记和选择

### 基础用法

::: demo 由`type`属性来选择tag的类型，或通过`color`属性来自定义背景色
```js
render() {
  return <div className="demo-tag-inline">
    <Tag>标签一</Tag>
    <Tag type="primary">标签二</Tag>
    <Tag type="succes">标签三</Tag>
    <Tag type="info">标签四</Tag>
    <Tag type="warning">标签五</Tag>
    <Tag type="danger">标签六</Tag>
    <Tag color="#847b7b">#847b7b</Tag>
  </div>
}
```
:::

### 可移除的标签

::: demo 通过`closable`设置是否显示移出图标，以及`onClose`钩子添加移出事件
```js
constructor(props){
  super(props)
  this.state={
    tags:[{key:'default',text:'Default',type:''}
      ,{key:'primary',text:'Primary',type:'primary'}
      ,{key:'succes',text:'Succes',type:'succes'}
      ,{key:'info',text:'Info',type:'info'}
      ,{key:'warning',text:'Warning',type:'warning'}
      ,{key:'danger',text:'Danger',type:'danger'}
      ,{key:'#847b7b',text:'#847b7b',color:'#847b7b'}
    ]
  }
}

handleClose(tag){
  const { tags } = this.state;
  tags.splice(tags.map(el => el.key).indexOf(tag.key), 1);
  this.setState({ tag });
}

render() {  
  return <div className="demo-tag-inline">
  {
    this.state.tags.map(tag=>{
      return <Tag key={tag.key}
        type={tag.type}
        color={tag.color} 
        closable
        onClose={this.handleClose.bind(this,tag)}>
          {tag.text}
        </Tag>
    })
  }
  </div>
}
```
:::

### 动态编辑

动态编辑标签可以通过点击标签关闭按钮后触发的 `onClose` 事件来实现

:::demo
```js
constructor(props) {
  super(props);

  this.state = {
    dynamicTags: ['标签一', '标签二', '标签三'],
    inputVisible: false,
    inputValue: ''
  }
}

onKeyUp(e) {
  if (e.keyCode === 13) {
    this.handleInputConfirm();
  }
}

onChange(value) {
  this.setState({ inputValue: value });
}

handleClose(index) {
  this.state.dynamicTags.splice(index, 1);
  this.forceUpdate();
}

showInput() {
  this.setState({ inputVisible: true }, () => {
    this.refs.saveTagInput.focus();
  });
}

handleInputConfirm() {
  let inputValue = this.state.inputValue;

  if (inputValue) {
    this.state.dynamicTags.push(inputValue);
  }

  this.state.inputVisible = false;
  this.state.inputValue = '';

  this.forceUpdate();
}

render() {
  return (
    <div className="demo-tag-inline">
      {
        this.state.dynamicTags.map((tag, index) => {
          return (
            <Tag
              key={index}
              closable={true}
              closeTransition={false}
              type="primary"
              onClose={this.handleClose.bind(this, index)}>{tag}</Tag>
          )
        })
      }
      {
        this.state.inputVisible ? (
          <Input
            className="input-new-tag"
            value={this.state.inputValue}
            ref="saveTagInput"
            size="small"
            onChange={this.onChange.bind(this)}
            onKeyUp={this.onKeyUp.bind(this)}
            onBlur={this.handleInputConfirm.bind(this)}
          />
        ) : <Button className="button-new-tag" size="small" onClick={this.showInput.bind(this)} icon="add">New Tag</Button>       
      }
    </div>
  )
}
```
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 主题 | string | 'primary', 'success', 'info', 'warning', 'danger' | — |
| closable | 是否可关闭 | boolean | — | false |
| color | 自定义背景色 | string | — | — |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| onClose | 关闭tag时触发的事件 | — |