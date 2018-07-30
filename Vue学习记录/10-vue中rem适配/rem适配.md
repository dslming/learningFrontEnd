# [Vue项目自动转换 px 为 rem，高保真还原设计图](https://www.cnblogs.com/yuerdong/p/8427807.html)		 

## 技术栈

- vue-cli：使用脚手架工具创建项目。
- postcss-pxtorem：转换px为rem的插件。

## 自动设置根节点`html`的`font-size`

因为`rem`单位是相对于根节点的字体大小的，所以通过设置根节点的字体大小可以动态的改变rem的大小。

原理网上有很多文章分享，这里不具体解释。

### 1、创建`rem.js`文件

很多人写这种小工具文件会习惯性的加上闭包，这个其实是没有必要的。ES6中每个文件都是单独的一个模块。

```
// 基准大小
const baseSize = 32
// 设置 rem 函数
function setRem () {
  // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
  const scale = document.documentElement.clientWidth / 750
  // 设置页面根节点字体大小
  document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px'
}
// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem()
}


```

### 2、在`main.js`中引入`rem.js`

```
import './utils/rem'

```

引入文件后，查看页面的html节点，是否有被自动添加 `font-size`。

**注意：完成到这一步，也就是实现了rem布局，实际开发的时候，还是需要我们去计算对应的rem值去开发。**

**下一步我们就配置一下webpack，自动转换px为对应的rem值。**

## 配置 `postcss-pxtorem` 自动转换px为rem

**1、安装 postcss-pxtorem**

```
$ npm install postcss-pxtorem -D

```

**2、修改根目录 .postcssrc.js 文件**

找到 `plugins` 属性新增pxtorem的设置

```
"postcss-pxtorem": {
  "rootValue": 32,
  "propList": ["*"],
  // 注意：如果有使用第三方UI如VUX，则需要配置下忽略选择器不转换。
  // 规则是class中包含的字符串，如vux中所有的class前缀都是weui-。也可以是正则。
  "selectorBlackList": ["weui-"]
}

```

按照上述配置项目后，即可在开发中直接使用 `px` 单位开发。

例如设计给出的设计图是 **750 \* 1136**，那么可以直接在页面中写

```
body {
	width: 750px;
	height: 1136px;
}

```

将被转换为

```
body {
	widht: 23.4375rem;
	height: 35.5rem;
}

```

**注意：此方法支持import 和 .vue单文件中style。暂不支持style中使用@import url();**