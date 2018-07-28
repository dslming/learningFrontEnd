> [vue项目优化之通过keep-alive数据缓存(vue+webpack)](https://blog.csdn.net/wang1006008051/article/details/78066973)



通过vue提供的keep-alive减少对服务器的请求次数。

VUE2.0中提供了一个keep-alive方法，可以用来缓存组件，避免多次加载相应的组件，减少性能的消耗。比如， 一个页面的数据包括图片、文字等用户都已经加载完了，然后用户通过点击跳转到了另外一个界面。然后从另外一个界面通过返回又回到了原先的界面。如果没有设置的话，那么原先界面的信息就要重新向服务器请求得到。而通过vue提供的keep-alive可以是页面的已经请求的数据得以保存，减少请求的次数，提高用户的体验程度。

缓存组件又分为两种，缓存整个站点的页面的组件或者缓存部分页面的组件。

1、缓存所有的页面,适用于每个页面都有请求的情况。方法如下，在需要缓存的router-view用keep-alive标签进行包裹起来。
将首次触发请求写到created钩子里边，就能实现缓存。比如从列表页，去了详情页，回来还是原来的页面。

2、缓存部分组件或者页面，使用router.meta这个属性通过判断的方法可以实现。方法如下：

```js
 //所有商铺列表页
        {
            path: '/msite',
            component: msite,
            meta: { keepAlive: true },
        },
```
还可以通过新增的属性include/exclude来设置。见名思意，include包含的意思，exclude除了的意思。这里需要用到组件的名称即name来进行设置，所以name肯定就要加上了。 加入 a,b组件需要缓存，c,d组件不需要缓存。

应用详细看：

[vue项目优化之页面的按需加载(vue+webpack)](https://blog.csdn.net/wang1006008051/article/details/78066810)



<全文结束>