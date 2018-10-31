orientationchange事件在设备的纵横方向改变时触发。



示例：

```js
//请注意，“orientationchange”和screen.orientation在下文中是不固定的
//代码，尽管这个API仍然是供应商前缀的浏览器实现它。
window.addEventListener（"orientationchange"，function（）{
    alert("the orientation fo the device is now " + screen.orientation.angle）;
}）;
```

