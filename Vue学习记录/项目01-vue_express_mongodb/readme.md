>项目说明：
>
>​	使用最简单的vue+express+mongodb搭建一个完整的项目。实现一个汽车列表的增删改查。



#### 1、目录结构

```js
│  .gitignore
│  app.js              ----程序入口文件
│  db_connect.js       ----连接数据库
│  db_sql.js           ----操作数据库
│  db_user.js          ----数据库模板
│  handle.js           ----处理路由请求
│  package-lock.json   
│  package.json
│  readme.md
│  router.js           ----express路由
│
└─views                ----静态页面依赖文件
        axios.js       ----ajax
        index.html     ----主页
        vue.js         
```

#### 2、服务器启动

安装依赖:npm i 

启动服务器:node app.js

访问：http://127.0.0.1:3000/



#### 3、数据库启动

使用mongodb数据库:mongod.exe

![数据库](.\数据库.bmp)

#### 4、项目效果

![项目展示](.\项目展示.gif)

<全文结束>



