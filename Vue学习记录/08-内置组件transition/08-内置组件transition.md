### 一、`<transition>` 组件

是VUE的内置组件。

#### 1、功能

对标签里的内容提供过渡效果。

#### 2、触发条件

当Vue插入、更新、移除DOM时,会触发过渡效果。比如下面的情况：

- 条件渲染(使用 v-if )
- 条件展示(使用 v-show)
- 动态组件(比如 router-view )

#### 3、props

- `name` - string，用于自动生成 CSS 过渡类名。例如：`name: 'fade'` 将自动拓展为`.fade-enter`，`.fade-enter-active`等。默认类名为 `"v"`


- `mode` - string，控制离开/进入的过渡时间序列。有效的模式有 `"out-in"` 和 `"in-out"`；默认同时生效。
    - in-out: 新元素进行过渡，然后是当前元素进行过渡
    - out-in:当前元素进行过渡，然后是新元素进行过渡


#### 4、过渡的类名
在进入/离开的过渡中，会有 6 个 class 切换。

![transition](.\img\transition.png)

- `v-enter`：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。
- `v-enter-active`：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。
- `v-enter-to`: **2.1.8版及以上** 定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 `v-enter` 被移除)，在过渡/动画完成之后移除。
- `v-leave`:  定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。
- `v-leave-active`：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。
- `v-leave-to`: **2.1.8版及以上** 定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 `v-leave` 被删除)，在过渡/动画完成之后移除。




#### 5、例子

```js
<transition name="router-fade" mode="out-in">
  <keep-alive>
  <router-view></router-view>
  </keep-alive>
</transition>

.router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
  }
.router-fade-enter, .router-fade-leave-active {
  opacity: 0;
}
```




<全文结束>