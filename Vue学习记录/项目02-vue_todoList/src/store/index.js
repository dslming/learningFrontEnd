import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import VueLocalStorage from 'vue-localstorage'
Vue.use(VueLocalStorage)

const STORAGE_KEY = 'todos-vuejs'

const state = {
    todos: [
        {
            done:false,
            text:"123"
        },
    ]
}
const getters = {
    todos:  state => state.todos
} 
const mutations = {
    addTodo (state, text) {
        state.todos.push({
            text,
            done: false
        })
    },
    deleteTodo (state, index) {
        state.todos.splice(index, 1)
    },
    toggleTodo (state, index) {
        state.todos[index].done = !state.todos[index].done
    }
}
export default new Vuex.Store({
  state,
  getters,
  mutations,
})