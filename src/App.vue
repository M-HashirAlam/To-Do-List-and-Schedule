<template>
  
  <!--  <router-link to="todo">Abc</router-link> -->
  <div>
      <NavBar />  
       <routerView></routerView>
       </div>
       
 
         
  <!-- <ToDOForm/> -->
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
import NavBar from "./components/NavBar.vue"
// import HelloWorld from './components/HelloWorld.vue'
// import TodoList from './components/TodoList.vue';


import { RouterView } from 'vue-router'
// import ToDOForm from './components/ToDOForm.vue';



export default {
  name: 'App',
  components: {
    // HelloWorld
    // TodoList,
    RouterView,
    NavBar
    // ToDOForm
},

  data(){
    return{
      
      currentPath: window.location.hash

    }
  },
  computed: {
    
  }
}
    
  
  
</script>

<!-- <style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
