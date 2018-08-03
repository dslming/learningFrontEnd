h1~h5标签不仅仅应该用来做标题。也可以做盒子。例如下面：

![h5做盒子](.\img\h5做盒子.bmp)

h5标签内一行元素由若干项构成,于是使用h5标签做盒子。

```html
<h5 class="rating_order_num">
  <!-- 五角星和销售数量 -->
  <section class="rating_order_num_left">
    <section class="rating_section">
      <rating-star :rating='item.rating'></rating-star>
      <span class="rating_num">{{item.rating}}</span>
    </section>
    <section class="order_section">
      月售{{item.recent_order_num}}单
    </section>
  </section>

  <!-- 准时达和蜂鸟专送 -->
  <section class="rating_order_num_right">
    <span class="delivery_style delivery_left" v-if="item.delivery_mode">                   {{item.delivery_mode.text}}
    </span>
    <span class="delivery_style delivery_right" v-if="zhunshi(item.supports)">准时达</span>
  </section>
</h5>
```

<全文结束>