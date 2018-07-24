<template>
  <div id="app">
     <h2>Simply todolist - vuejs</h2>
     <input id="add-input" v-model="todoText" @keyup.enter="addTodo" placeholder="do what?"/>
     <ul>
       <todo v-for="(todoItem, index) in todoList" :todoItem="todoItem" :index="index" :key=index></todo>
     </ul>
  </div>
</template>

<script>
import todo from "./components/todo.vue";

export default {
  name: "App",
  components: {
    todo
  },
  data() {
    return {
      todoText: ""
    };
  },
  computed: {
    todoList: function(){
      return this.$store.state.todos;
    }
  },
  methods: {
    addTodo: function() {
      this.$store.commit("addTodo", this.todoText);
      this.todoText = "";
    }
  }
};
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
#app {
  width: 800px;
  margin: 30px auto;
}
#add-input {
  width: 750px;
  height: 35px;
  padding: 0 5px;
}
ul {
  list-style: none;
  padding: 0;
}
</style>
