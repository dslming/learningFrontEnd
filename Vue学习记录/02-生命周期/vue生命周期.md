> 生命周期的流程
>
> ![lifecycle](.\img\lifecycle.png)

### 生命周期特点

#### 1、beforeCreate

    - 在实例创建之前执行
    - 在代码执行创建 new Vue 的时候，最先执行的代码
    - 所以这里什么都拿不到
    - 因为在这里的时候，什么都没有做，刚刚开始准备要进行实例化
    - 基本不用

#### 2、created
      - 实例化完成之后
      - 因为实例化已经完成了，但是还没有开始根据自己的数据去渲染 DOM 结构
      - 这个时候能拿到所有配置项里面的数据，拿不到 el，DOM结构
      - 基本上每个项目都有 100%
      - 一半在这里做的大部分是初始数据的请求


#### 3、beforeMount
      - 在挂载之前做的第一件事情是什么
        + 在挂载之前先要获得一个原始模版
        + <div id="app">
            {{msg}}
          </div>
      - 在拿到原始模版的 HTML 结构以后就执行了这个函数
      - 这个时候我们能拿到一个 this.$el 来表示这个模版
      - 很少用，因为替换之前我们拿不到准确的内容他

#### 4、mounted
      - 当我把模版中的内容替换好了以后，去执行
      - 模版已经替换好了，那么就可以拿到有一个替换好的 HTML 结构
      - 一半来说用的不是太多 40%
      - 一般是在结构搭建好以后对某些元素进行特殊处理的时候使用

#### 5、beforeUpdate 
	  - 是在当前实例更新前
	  - 跟新前执行的回调函数
	  - 因为 $el 是个引用数据类型，所以不能直接打印他，因为打印出来的东西也是更新后的
	  - 40%

#### 6、updated 
      - 是在当前实例更新后
      - 更新后执行的回调函数
      - 可以打印 $el 了，因为就是更新后的
      - 40%

#### 7、beforeDestroy 
      - 销毁前执行
      - 5%

#### 8、destroyed 
      - 销毁后执行
      - 1%


### 感受生命周期
```html
<body>
    <div id="app" v-on:click="run">
        {{message}}
        <input type="text" v-model="message">

    </div>

    <script>
        var vm = new Vue({
            el: "#app",
            data: {
                message: "hello",
            },
            methods:{
                run:function(){
                    console.log("我被点击了...");
                }
            },
            beforeCreate: function () {
                console.group("beforeCreate 创建前 状态"); 
                console.log("el              " + this.$el,); // undefined   
                console.log("data            " + this.message);// undefined
                console.log("methods         " + this.run);//function
                console.log(this.run);
            },
            created:function(){
                console.group("created 创建完毕 状态"); 
                console.log("el              " + this.$el); // undefined   
                console.log("data            " + this.message);// hello------------数据观测(data observer)被初始化
                console.log("methods         " + this.run);//function
                console.log(this.run);
            },
            beforeMount:function(){
                console.group("beforeMount 挂载前 状态");  
                console.log("el              " + this.$el);// object------------$.el对象被实例,此时为模板,还没有被数据渲染,render函数没有调用
                console.log(this.$el);
                console.log("data            " + this.message);// hello
                console.log("methods         " + this.run);//function
                console.log(this.run);
            },
            mounted:function(){
                console.group("mounted 挂载后 状态"); 
                console.log("el              " + this.$el);// obj------------数据渲染到DOM中
                console.log(this.$el);
                console.log("data            " + this.message);// hello
                console.log("methods         " + this.run);//function
                console.log(this.run);
            },
            beforeUpdate:function(){
                console.group("beforeUpdate 更新前 状态"); 
                console.log("el              " + this.$el);// obj
                console.log(this.$el);
                console.log("data            " + this.message);// hello-----------数据同步发生变化
                console.log("methods         " + this.run);//function
                console.log(this.run);
            },
            updated:function(){
                console.group("updated 更新后 状态"); 
                console.log("el              " + this.$el);// obj
                console.log(this.$el);
                console.log("data            " + this.message);// hello------------与beforeUpdate相同
                console.log("methods         " + this.run);//function
                console.log(this.run);
            },
             // vm.$destroy(),执行此操作会调用下面的方法---------------------销毁后只存在dom元素,没有了vue对象
            beforeDestroy:function(){
                console.group("beforeDestroy 销毁前 状态"); 
                console.log("el              " + this.$el);// obj
                console.log(this.$el);
                console.log("data            " + this.message);// hello
                console.log("methods         " + this.run);//function
                console.log(this.run);
            },
            destroyed:function(){
                console.group("beforeDestroy 销毁前 状态"); 
                console.log("el              " + this.$el);// obj
                console.log(this.$el);
                console.log("data            " + this.message);// hello
                console.log("methods         " + this.run);//function
                console.log(this.run);
            },

        });
    </script>
</body>
```

<全文结束>