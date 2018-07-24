> VUEX基本使用

#### 1、基本使用

在一个组件中使用。

```html
<template>
    <div id="app1">
      <p>{{ count }}</p>
      <p>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
      </p>
  </div>
</template>

<script>
import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  }
});

export default {
  template: "#app1",
  computed: {
    count() {
      return store.state.count;
    }
  },
  methods: {
    increment() {
      store.commit("increment");
    },
    decrement() {
      store.commit("decrement");
    }
  }
};
</script>
```

**Mutations：**
定义action。

**commit：**
派发acition




