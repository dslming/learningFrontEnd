React Route

>为什么需要Route
1)在单页面应用中,很多功能由Ajax实现,但页面功能和URL不一致.路由就是解决这个问题的.

# 一、认识Route
## 1.1 初识
React Route提供三个组件：
- Router 和 Route：采用声明方式将路由映射到应用程序的UI层。
- Link：类似a标签的href来创建一个完全可以访问的锚定标记。

需要安装：
```react
npm install react-router
```

导入组件：
```react
import { Router, Route, IndexRoute, Link } from 'react-router';
```

## 1.2 带参数的路由
>通过props.params为组件传递参数

### 1.2.1 单个参数

定义：

```react
class App extends React.Component {
  render() {
    return (
        <Router history={hashHistory}>
            <Route path='/user/:name' component={UserPage}></Route>
        </Router>
    )
  }
}
```

调用：
```react
<Link to="/user/sam">用户</Link>
<Route path="/repo/:repo_name" component={RepoDetails} />
```
参数repo_name会被注入到组件的属性parms。

使用参数：

```react
export default class UserPage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(<div>this.props.params.name</div>)
    }
}
```



### 1.2.2 多个参数

```react
<Route path='/user/:data' component={UserPage}></Route>
```

```react
var data = {id:3,name:sam,age:36};
data = JSON.stringify(data);
var path = `/user/${data}`;

<Link to={path}>用户</Link>

var data = JSON.parse(this.props.params.data);
var {id,name,age} = data;
```

## 1.3 传递 props

通过路由和克隆为子组件渲染并传递props.



## 1.4 UI界面与URL解耦

## 1.5 history实现更改路由