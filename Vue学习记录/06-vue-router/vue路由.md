### 一、vue中路由的使用

#### 1、router

router是`路由实例`。就是new出来的。

在子组件中打印this.$router

```js
{…}
afterHooks: Array []
app: Object { _uid: 0, _isVue: true, "$options": {…}, … }
apps: Array [ {…} ]
beforeHooks: Array []
fallback: false
history: Object { router: {…}, base: "", ready: true, … }
matcher: Object { match: match(), addRoutes: addRoutes() }
mode: "hash"
options: Object { routes: (2) […] }
resolveHooks: Array []
<prototype>: Object { match: match(), init: init(), beforeEach: beforeEach(), … }
```

#### 2、route

在子组件中打印this.$route。

route是属于该路由组件自己的。当匹配时就会创建一个`路由对象`$route.

```js
{…}
fullPath: "/add"
hash: ""
matched: Array [ {…} ]
meta: Object {  }
name: undefined
params: Object {  }
path: "/add"
query: Object {  }
<prototype>: Object { … }
```

#### 3、$router.push
浏览器的URL路由匹配到'/add'时,然后回车相当于:

```js
this.$router.push("/add");
```



#### 4、beforeEach

**钩子函数的作用：**
在路由跳转的时候，我们需要一些权限判断或者其他操作。这个时候就需要使用路由的钩子函数。

**beforeEach函数有三个参数：**
- to: router即将进入的路由对象
- from: 当前导航即将离开的路由
- next: 一定要调用该方法来 解决这个钩子




#### 5、`<router-link>`

如果要动态给元素绑定类名，可以用js，但是太麻烦了，所以可以直接使用vue-router中的一个新标签。
-  为了能够动态将active属性加到元素上，我们可以使用router-link中的一个属性：actvie-class:
-  actvie-class：被激活时会添加的类名



### 二、缓存部分组件

#### 1)使用router.mate属性
```js
// 这是目前用的比较多的方式
<keep-alive> 
  <router-view v-if="!$route.meta.notKeepAlive"></router-view> 
</keep-alive> 

<router-view v-if="$route.meta.notKeepAlive"></router-view>
```

路由设置，非官方
```js
 //所有商铺列表页
        {
            path: '/msite',
            component: msite,
            meta: { keepAlive: true },
        },
```



#### 2)使用新增属性inlcude/exclude

2.1.0后提供了include/exclude两个属性 可以针对性缓存相应的组件

```js
<!-- comma-delimited string --> 
  <keep-alive include="a,b">
      <component :is="view"></component> 
   </keep-alive>
        
<!-- regex (use v-bind) --> 
  <keep-alive :include="/a|b/"> 
    <component :is="view"></component> 
   </keep-alive> //其中a,b是组件的name
```

注意:这种方法都是预先知道组件的名称的

#### 3) 动态判断

```js
<keep-alive :include="includedComponents">
  <router-view></router-view>
</keep-alive>
```

includedComponents动态设置即可



<全文结束>

