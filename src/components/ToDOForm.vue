<script setup>

// imports
import { reactive, ref } from "vue"
import { useStore } from 'vuex';

// constants
const store = useStore();
const maintitle=ref('');
const maindesc=ref('');


// Functions
const click=()=> {
  const newData =reactive( {
    title: maintitle.value,
    description: maindesc.value,
  });

  // Get the existing data from the store and add the new data to it
  const updatedData = [...store.state.myData, newData];

  store.commit('updateMyData', updatedData);
}



</script>
<template>
   
   

    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-40 w-auto" src="https://icon-library.com/images/todo-icon/todo-icon-17.jpg" alt="Your Company" />
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Enter Your Work</h2>
      </div>
  
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" @submit.prevent="onSubmit" >
          <div>
            <label for="title" class="block text-sm font-medium leading-6 text-gray-900">Title</label>
            <div class="mt-2">
              <input id="title" name="title"  v-model="maintitle"  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"  />
            </div>
          </div>
  
          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium leading-6 text-gray-900" >Description</label>
              
            </div>
            <div class="mt-2">
              <input id="description" name="description" v-model="maindesc"  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"  />
            </div>
          </div>
  
          <div>   
            <button @click="click"  class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">ADD</button>
          </div>
        </form>
  
        
      </div>
    </div>
    
    <!-- <Todolist :data="Mydata" /> -->
  </template>