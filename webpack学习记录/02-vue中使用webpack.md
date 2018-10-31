#### 1、别名

在build/webpack.base.config.js文件中：

```js
resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
```

修改alias别名,可以在代码中更简单的使用路径。

<全文结束>