### 用法一基本使用

```js
var pm = new Promise((resolve,reject)=>{
    // 1) setTimeout(()=>{console.log("xixi");},1000);
    // 2)console.log("haha");

    if(0){
        resolve();
    }else{
        reject();
    }
});

pm.then(()=>{console.log("suc");},()=>{console.log("fail")});
```

1)取消注释时输出：

```js
fail
xixi
```

2)取消注释时

```js
haha
fail
```

### 用法二处理异步

```js
var pm = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("xixi");
        resolve();
    },5000);
});

pm.then(()=>{console.log("suc");},()=>{console.log("fail")});
// 5s后打印xixi suc
```

### 用法三异常捕获+异步

```js
var sleep = function (time) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            // 模拟失败
            if(1){
                reject("fail");
            }else{
                resolve("succ");
            }
        },5000);
    });
};

var start = async function () {
    try {
        let result = await sleep(3000);
        console.log(result); 
    }
    catch (err) {
        console.log(err);
    }
};

start()
// 3s后打印fail
```

try catch只能用在promise 对象。

reject时为异常。