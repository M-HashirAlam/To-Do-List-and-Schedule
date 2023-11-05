<script setup>
// imports
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { ExclamationTriangleIcon } from '@heroicons/vue/24/outline'
// import { PencilAltIcon } from "@vue-hero-icons/outline"


// Constants
const open = ref(true)

// const props=defineProps({
//     data:Array,
// })
const store = useStore();
const title2=ref("");
const desc2=ref("");
const changeEdit=ref(false)
const searchQuery=ref("")
const myData = computed(() => store.state.myData);
console.log(myData.value,"List")

// Functions
const Delete=(key)=>{
    const keyToDelete = key;
    const indexToDelete = myData.value.findIndex(item => item.title === keyToDelete);

if (indexToDelete !== -1) {
  // If an object with the specified key was found, remove it from the array
  myData.value.splice(indexToDelete, 1);
} else {
  // Handle the case where the key was not found in any object
  console.log(`Object with key ${keyToDelete} not found.`);
}
 
}


const save=(indexToEdit) => {
    changeEdit.value=false
  if (myData.value && Array.isArray(myData.value) ) {
    myData.value[indexToEdit].title = title2.value;
    myData.value[indexToEdit].description = desc2.value;
  } else {
    console.error('Invalid index or myData array.');
  }
}


const edit=(key)=>{
    changeEdit.value=true
    const keyToEdit = key;
    const indexToEdit = myData.value.findIndex(item => item.title === keyToEdit);

if (indexToEdit !== -1) {
    save(indexToEdit)
    changeEdit.value=false
}
}

const filteredList =()=> {
  return myData.value.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
}




</script>

<template>
    
    <div class="h-full min-h-full bg-blue-300 m-0 p-0">
        
        <div class="flex flex-col justify-center items-center" >
           <div class="flex mt-5  w-full">
            <div class="flex w-full md:justify-center md:items-center items-start justify-start md:ml-44 ml-0" >
            <h2 class="text-4xl font-bold ">My TO DO's 	&#128516;</h2>
            </div>
            <div class="flex justify-end">
            <input class="rounded-xl h-12" v-model="searchQuery" type="text" placeholder="Search..."  />
            </div>
            </div>
        
            
           
            <!-- List -->
            <div class="min-w-[33%]  bg-white shadow-xl border mt-10 mb-3 md:px-28 px-20 py-5 rounded-md ">
                <div class="grid grid-cols-1 ">
                    <div class="mb-5"><h3 class="text-red-600 text-2xl">Doing HomeWork</h3></div>
                    <div>
                    <h2>HomeWork of Maths Ex:1.8</h2>
                    

                    </div>

                </div>
                <div class="grid grid-cols-2 mt-3 gap-x-6">
                    <button class="bg-blue-600 rounded-full p-2">Edit</button>
                    <button class="bg-red-600 rounded-full p-2">Delete</button>
                </div>

            </div>
            <!-- End list -->

            <!-- Dynamic List -->
            
            <!-- <div v-for="(item, key) in myData" :key="key"   class="flex flex-col min-w-[33%] mb-2 bg-white shadow-xl border mt-10 px-32 py-5 rounded-md items-center " > -->
                <div v-for="(item,key) in filteredList()"  :key="key"   class="flex flex-col min-w-[33%] mb-2 bg-white shadow-xl border mt-10 md:px-28 px-20 py-5 rounded-md items-center " >

                
                <div class="grid grid-cols-1 ">
                    <div class="mb-5"><h3 class="text-red-600 text-2xl">{{ item.title }}</h3></div>
                    <div>
                    
                    <h2>{{ item.description }}</h2>

                    </div>

                </div>
                
                <div class="grid grid-cols-3 mt-3 gap-x-6 w-full min-w-full">
                    <button @click="edit" class="bg-blue-600 rounded-full p-2 w-full">Edit</button>
                    <button @click="Delete(item.title)" class="bg-red-600 rounded-3xl  w-full">Delete</button>
                    <button @click="save(key)" class="bg-green-600 rounded-full p-2 w-full">Save</button>
                </div>
                
                
            
            
                
                <!-- <div v-if="changeEdit">
                    <input type="text" v-model="title2" placeholder="Enter your Title">
                    <br>
                    <input type="text" v-model="desc2" placeholder="Enter Description" />
                    <button @click="save(key)">Save</button>

                </div> -->
                


            </div>
            
            
            
            
            <!-- End of dyanamic list -->
        </div>
        <!-- Model -->
        <div v-if="changeEdit">
        <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="open = false">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <ExclamationTriangleIcon class="h-6 w-6 text-red-600" aria-hidden="true" />
                  </div>
                  <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900">EDIT</DialogTitle>
                    <div class="mt-2">
                        <input class="min-w-full mb-5 w-full" placeholder="Enter your Title" v-model="title2" type="text" />
                        
                        <input  class="min-w-full w-full" placeholder="Enter your Description" v-model="desc2" type="text" />

                      <!-- <p class="text-sm text-gray-500">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p> -->
                    </div>
                  </div>
                </div>
              </div>
              <!-- <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto" @click="open = false">Save</button>
                <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" @click="open = false" ref="cancelButtonRef">Cancel</button>
              </div> -->
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
  </div>
  <!-- End Model -->

    </div>
</template>