> 目的：cookie的介绍和使用
>
> 日期：2018/7/30
>
> 作者：1097364388@qq.com
>
> 参考：...

#### 1、cookie应用

（1）**保存用户登录状态。**例如将用户id存储于一个cookie内，这样当用户下次访问该页面时就不需要重新登录了，现在很多论坛和社区都提供这样的功能。 cookie还可以设置过期时间，当超过时间期限后，cookie就会自动消失。因此，系统往往可以提示用户保持登录状态的时间：常见选项有一个月、三个 月、一年等。 

（2）**跟踪用户行为。**例如一个天气预报网站，能够根据用户选择的地区显示当地的天气情况。如果每次都需要选择所在地是烦琐的，当利用了 cookie后就会显得很人性化了，系统能够记住上一次访问的地区，当下次再打开该页面时，它就会自动显示上次用户所在地区的天气情况。因为一切都是在后 台完成，所以这样的页面就像为某个用户所定制的一样，使用起来非常方便。 

（3）**定制页面。**如果网站提供了换肤或更换布局的功能，那么可以使用cookie来记录用户的选项，例如：背景色、分辨率等。当用户下次访问时，仍然可以保存上一次访问的界面风格。 

（4）**创建购物车。**正如在前面的例子中使用cookie来记录用户需要购买的商品一样，在结账的时候可以统一提交。例如淘宝网就使用cookie记录了用户曾经浏览过的商品，方便随时进行比较。 



#### 2、cookie使用

使用cookie.js库,[地址](https://github.com/florian/cookie.js)

```js
<script src="./cookie.js"></script>
<script>
    window.onload = function () {
        cookie.set({
            key1: 'value1',
            key2: 'value2'
        }, {
                expires: 7
            })
    }
</script>
```

使用谷歌浏览器调试工具查看。必须使用http协议访问网页才可以。

![cookie](.\img\cookie.bmp)

#### 3、cookie原理

调用底层的webapi

```js
// 增
document.cookie="username=John Doe";

// 删, 设置到期时间为过去的时间
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT"; 

// 改,覆盖即可
document.cookie="username=Ming";

// 查
var x = document.cookie;
```



#### 4、cookie特性(缺点)

- 用户可以操作（禁用）cookie，使功能受限。
- 每次访问都要传送cookie给服务器，浪费带宽。
- 大小最大4Kb

<全文结束>





