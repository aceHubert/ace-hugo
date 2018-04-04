## Tag 标签

用于标记和选择

### 基础用法

::: demo 由`type`属性来选择tag的类型，或通过`color`属性来自定义背景色
```js
render() {
  return <div className="demo-tag-block">
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
  return <div className="demo-tag-block">
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
