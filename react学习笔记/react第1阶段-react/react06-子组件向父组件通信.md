# 一、利用回调函数

comment-app案例中,commentApp.js父组件中将回调函数通过props传下去,那么commentInput.js中子组件通过props子组件调用。代码截取：

commentApp.js
```js
handleSubmitComment (comment) {
    if (!comment) return
    if (!comment.username) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
    this.state.comments.push(comment)
    this.setState({
      comments: this.state.comments
    })
  }

  render() {
    return (
      <div className='wrapper'>
        // 设置props属性中的回调函数
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList comments={this.state.comments}/>
      </div>
    )
  }
```

commentInputs.js
```js
handleSubmit () {
    if (this.props.onSubmit) {
      // 调用父组件的回调函数
      this.props.onSubmit({
        username: this.state.username,
        content: this.state.content,
      })

      this.props.onSubmit();
    }
    this.setState({ content: '' })
  }
  
<div className='comment-field-button'>
          <button
            onClick={this.handleSubmit.bind(this)}>
            发布
          </button>
</div>
```

# 二、自定义事件机制

略。(暂时空着)

<全文结束>