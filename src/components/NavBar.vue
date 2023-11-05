<template>
    <div>

  <div class="bg-slate-50 flex min-w-full lg:p-5 px-0 lg:gap-x-10 gap-x-5">
            <div class="flex w-full lg:justify-center lg:items-center lg:gap-x-5 gap-x-1 ">
           <div ><p class="lg:text-xl text-lg" >{{ formattedDate }}</p></div>
           <div  v-if="$route.path ==='/form'">
                  <router-link to="/todo" class="flex justify-items-end items-end bg-blue-300 lg:p-2 p-1 rounded-md">My TO-DO List</router-link>
                </div>
                
                <div v-else-if="$route.path==='/shedule' ">
                  <router-link to="/sheduleList" class="flex justify-items-end items-end bg-blue-300 lg:p-2 p-1  rounded-md">Schedule List</router-link>
                </div>

                
                </div>
           <div class="flex justify-end w-full items-end lg:gap-x-5 gap-x-2 ">
            
            <router-link class="hover:text-blue-500  hover:underline hover:font-semibold" to ='/'>Home</router-link>
            <router-link class="hover:text-blue-500  hover:underline hover:font-semibold" to ='/form'>Create A To-Do</router-link>
            <router-link class="hover:text-blue-500  hover:underline hover:font-semibold" to ='/shedule'>Create A Schedule</router-link>
             <!-- <div v-if="$route.path === '/'">
               <router-link to="/todo" class="flex justify-items-end items-end bg-blue-300 p-2 rounded-md">My TO-DO List</router-link>
                </div> -->
                
                 

                 
              </div>
              
       </div>

       </div>
</template>
<script setup>
import { format } from 'date-fns';
import { computed } from 'vue';

const date= new Date()

const formattedDate=computed(() =>{
      return format(date, 'dd/MM/yyyy HH:mm:ss');
    })
</script>