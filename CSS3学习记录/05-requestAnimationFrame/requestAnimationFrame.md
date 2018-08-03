requestAnimationFrame是浏览器用于定时循环操作的一个接口，类似于setTimeout，主要用途是按帧对网页进行重绘。

```js
<body>
        <div id="test" style="width:1px;height:17px;background:#0f0;">0%</div>
        <input type="button" value="Run" id="run"/>
        
    <script>
        window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
        var start = null;
        var ele = document.getElementById("test");
        var progress = 0;

        function step(timestamp) {
            progress += 1;
            ele.style.width = progress + "%";
            ele.innerHTML = progress + "%";
            if (progress < 100) {
                requestAnimationFrame(step);
            }
        }
        requestAnimationFrame(step);
        document.getElementById("run").addEventListener("click", function () {
            ele.style.width = "1px";
            progress = 0;
            requestAnimationFrame(step);
        }, false);
    </script>
</body>
```

![requestAnimationFrame](.\img\requestAnimationFrame.gif)