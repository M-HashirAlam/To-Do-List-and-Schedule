<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6  lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-36 w-auto" src="new.png" alt="Your Company" />
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Schedule Your Work</h2>
      </div>
  
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" @submit.prevent="onSubmit" >
          <div>
            <label for="title" class="block text-sm font-medium leading-6 text-gray-900">Title</label>
            <div class="mt-2">
              <input id="title" name="title" v-model="title"   class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"  />
            </div>
          </div>

          <div class="flex lg:flex-row flex-col">
            <div>
            <label for="Type" class="block text-sm font-medium leading-6 text-gray-900">Type</label>
            <div class="mt-2 min-w-full">
                <select name="cars" id="cars" v-model="type" class="min-w-full lg:min-w-fit">
                    <option value="today">Today</option>
                    <option value="week">Weekly</option>
                    <option value="month">Monthly</option>
                    <option value="year">Yearly</option>
                </select>
            </div>
            </div>
            <div>
                <label for="title" class="block text-sm font-medium leading-6 text-gray-900">Date</label>

                <div class="mt-2">
                    <input type="date" v-model="date" id="date" name="date" class="min-w-full lg::min-w-fit">

                </div>


            </div>

            <div>
                <label for="time" class="block text-sm font-medium leading-6 text-gray-900">Time</label>

                <div class="mt-2">
                    <input type="time" id="time" name="time" v-model="time" class="min-w-full lg:min-w-fit">

                </div>


            </div>

          </div>
  
          <div>
            <div class="flex items-center justify-between">
              <label for="description" class="block text-sm font-medium leading-6 text-gray-900" >Description</label>
              
            </div>
            <div class="mt-2">
              <input id="description" name="description"  v-model="desc" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"  />
            </div>

          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="tags" class=" text-sm font-medium leading-6 text-gray-900" >Tags</label>
              
            </div>
            <div class="mt-2">
                <input
      id="tags"
      @keydown.enter.prevent="addTag"
      name="tags"
      v-model="singletag"
      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
    <ul class="inline-block">
      <li class="inline-block ml-4 bg-slate-300 mt-2" v-for="(tag, index) in tags" :key="index">{{ tag }}</li>
    </ul>
            </div>

          </div>
  
          <div>   
            <button @click="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">ADD</button>
          </div>
        </form>
  
        
      </div>
    </div>
    
</template>

<script setup>

// imports
import { reactive, ref } from 'vue';
import { useStore } from 'vuex';


// constants
const store = useStore();
const title=ref("")
const desc=ref("")
const time=ref("")
const date=ref("")
const singletag=ref("")
const tags=ref([])
const type=ref("")

// functions
const addTag=()=>{
    if (singletag.value.trim() !== '') {
        tags.value.push(singletag.value.trim());
        singletag.value = ''; // Clear the input field
        console.log(tags.value);
      }
}

const submit=()=>{
   const newscheduleData=reactive({
    title:title.value,
    type:type.value,
    date:date.value,
    time:time.value,
    description:desc.value,
    tags:tags.value
   })
   const updatedData = [...store.state.myData2, newscheduleData];

  store.commit('updateMyData2', updatedData);
    
}
</script>