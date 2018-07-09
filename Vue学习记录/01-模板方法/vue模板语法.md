>详细参考：https://cn.vuejs.org/v2/api
>包含系统指令和自定义指令

### 一、插值
#### 1 v-text

```html
        <div id="app" v-text="content"></div>
        <script>
            var vm1 = new Vue({
                el: "#app",
                data: {
                    "content": "app"
                }
            });
        </script>
```

也可以使用`{{}}`

```html
    <!-- # 一、插值 -->
    <!-- 01,{{}}文本 -->
    <div id="app1">{{content}}</div>
    <script>
        var vm1 = new Vue({
            el: "#app1",
            data: {
                "content": "app1"
            }
        });
        // 内容都会被原样输出替换
    </script>
```

#### 2 v-html
```html
    <!-- 02,v-html -->
    <div id="app2" v-html="content">123</div>
    <script>
        var vm2 = new Vue({
            el: "#app2",
            data: {
                "content": "<div>app2</div>"
            }
        });
        // 内容会被以html渲染到其内容
    </script>
```

#### 3 v-bind

用法一,监控属性

```html
    <!-- 03,v-bind属性绑定 -->
    <a id="app3" v-bind:href="src">app3跳转到百度</a>
    <script>
        var vm3 = new Vue({
            el: "#app3",
            data: {
                "src": "http://www.baidu.com"
            }
        });
    //https://www.baidu.com
    </script>
```
用法二,传入对象

```html
    <a id="app" v-bind={href:src}>app跳转到百度</a>
    <script>
        var vm3 = new Vue({
            el: "#app",
            data: {
                "src": "http://www.baidu.com"
            }
        });
    </script>
```

eg:

```html
  <!-- 对象有无引号都可以 -->
  <a id="app3" v-bind="{href:src+'?id='+id}">app3跳转到百度</a>
  <a id="app3" v-bind={href:src+'?id='+id}>app3跳转到百度</a>
  <script>
  var vm3 = new Vue({
    el: "#app3",
    data: {
      "src": "http://www.baidu.com",
      "id":5
    }
  });
 //https://www.baidu.com/?id=5
</script>
```
### 二、双向数据绑定

#### 1 v-model

可以简写：`:`

```html
<div id="app">
  <input type="text" v-model="value1">
  <p>{{value1}}</p>
</div>
<script>
  var vm = new Vue({
    el: "#app",
    data: {
      value1: "0",
    },
  });
// 输入框和p标签同步显示
</script>
```

### 三、事件绑定

#### 1 v-on

**基本使用**

可以简写:`@`

```html
    <button id="app" v-on:click="go">点我</button>
    <script>
        var vm = new Vue({
            el: "#app",
            methods:{
                go:()=>{
                    alert("我被点击了~");
                }
            }
        });
    // 点击后弹出警告
    </script>
```

**v-on修饰符**

1) v-on的事件修饰符

    由于js原生的方法对象中有很多的默认方法：比如说阻止默认行为，比如说阻止事件冒泡
    .stop：帮助我们阻止事件冒泡
    .prevent：帮助我们阻止默认行为
    .capture
    .self
    .once
    .passive
eg.

```js
<a href="http://www.baidu.com" @click.prevent.stop="go">百度</a>
```



2)v-on的按键修饰符：

    以下修饰符仅仅中是vue中为部分按钮准备的别名
        .enter：给回车键绑定事件
        .tab：给tab键绑定事件
        .delete (捕获“删除”和“退格”键)
        .esc
        .space
        .up
        .down
        .left
        .right
    如果要给这些按钮之外的按钮准备事件可以使用keycode：键盘数字。
eg.
```js
<input type="text" v-model="v1" v-on:keyup.13="getV1">
```



### 四、判断指令

#### 1 v-if

是否渲染节点。

```html
    <div id="app" v-if="flag">DIV</div>
    <script>
        var vu = new Vue({
            el: "#app",
            data: {
                flag: false,
            }
        });
    </script>
```

#### 2 v-show

是否显示节点。

```html
    <div id="app" v-show="flag">DIV</div>
    <script>
        var vu = new Vue({
            el: "#app",
            data: {
                flag: false,
            }
        });
    </script>
```

#### 3 v-for

```html
    <div id="app">
        <ul>
            <li v-for="(item, index) in arr">{{index}} : {{item}}</li>
        </ul>
    </div>
    <script>
        var vu = new Vue({
            el: "#app",
            data: {
                arr: ["联想","苹果","戴尔"],
            }
        });
    </script>
```



### 五、自定义指令

自定义指令必须都是小写，单词可以使用`-`连接。

#### 1 局部绑定

```html
    <input type="text" id="app" v-focus>
    <script>
        var vu = new Vue({
            el:"#app",
            directives:{
                focus:{
                    inserted:function(el){
                        el.focus();
                    }
                }
            },
        });
     // input标签自动获取焦点
    </script>
```

#### 2 全局绑定

eg1,获取焦点

```html
    <input type="text" id="app" v-focus>
    <script>
        Vue.directive("focus", {
            inserted: function (el) {
                el.focus();
            }
        });

        var vu = new Vue({
            el: "#app",
        });
    // input标签自动获取焦点
    </script>
```

eg2,改变颜色

```html
    <input type="text" id="app" v-color="color">
    <script>
        Vue.directive("color", {
            inserted: function (el,binding) {
               el.style.background = binding.value;
            }
        });

        var vu = new Vue({
            el: "#app",
            data:{
                color:"red",
            }
        });
    </script>
```

### 六、综合案例

#### 1 计算器

```html
    <div id="app">
            <input type="text" v-model="value1">
            +
            <input type="text" v-model="value2">
            <button v-on:click="run">=</button>
            <label>{{result}}</label>
    </div>
    <script>
        var vw = new Vue({
            el:"#app",
            data:{
                value1:0,
                value2:0,
                result:0,
            },
            methods:{
                run:function(){
                    this.result = +this.value1 + +this.value2;
                }
            }
        });
    </script>
```

#### 2 商品查询

实现了增删改查。

![vue模板语法](.\vue模板语法.bmp)

```html

  <style>
        table {
            border: 1px solid #000;
            border-collapse: collapse;
            margin: 0 auto;
            width: 800px;
            text-align: center;
        }

        tr,
        td,
        th {
            border: 1px solid #000;
            height: 30px;
        }
    </style>
    <table id="app">
        <tr>
            <td colspan="3">
                ID :
                <input type="text" v-model="id"> 名称 :
                <input type="text" v-model="name">
                <button v-on:click="add">{{option}}</button>
            </td>
        </tr>

        <tr v-color="color">
            <th>ID</th>
            <th>品牌名称</th>
            <th>操作</th>
        </tr>

        <tr v-for="(item,index) in dataList">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>
                <a href="javascript:;" v-on:click="edit(index)">编辑</a>
                <a href="javascript:;" v-on:click="del(index)">删除</a>
            </td>
        </tr>
    </table>

    <script>
        Vue.directive("color", {
            inserted: function (el, binging) {
                el.style.background = binging.value;
            }
        });

        var vw = new Vue({
            el: "#app",
            data: {
                dataList: [
                    { id: 1, name: "宝马" },
                    { id: 2, name: "奔驰" },
                ],
                color: '#0094ff',
                id: "",
                name: "",
                option: "添加",
                cruentIndex: 0,
            },
            methods: {
                add: function () {
                    if (this.option == "添加") {
                        var obj = {
                            id: +this.id,
                            name: this.name
                        };
                        if (obj.id == 0 || obj.name == "") {
                            return;
                        }
                        this.dataList.push(obj);

                    } else if (this.option == "修改") {
                        this.dataList[this.cruentIndex].id = this.id;
                        this.dataList[this.cruentIndex].name = this.name;
                        this.option = "添加";
                    }

                    this.id = "";
                    this.name = "";
                },
                del: function (index) {
                    this.dataList.splice(index, 1);
                },
                edit: function (index) {
                    this.id = this.dataList[index].id;
                    this.name = this.dataList[index].name;
                    this.option = "修改";
                    this.cruentIndex = index;
                }
            }
        });

    </script>
```

<全文结束>