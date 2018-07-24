对于专门的错误处理使用try-catch处理。

```js

function f1(){
    if(1){
        throw "no";
    }
    return 0;
}

let run = ()=>{
    try{
        console.log(f1());
    }
    catch(err){
        console.log(err);
    }
}

run();

// f1中if条件=0时：打印0
// f1中if条件=1时：打印no
```

