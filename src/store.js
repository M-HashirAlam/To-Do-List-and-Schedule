// store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    myData: [],
    myData2:[] // An array of objects
  },
  
  mutations: {
    updateMyData(state, data) {
      state.myData = data;
    },
    updateMyData2(state,data){
      state.myData2=data
    },
    // Add a mutation to clear the data if needed
    clearMyData(state) {
      state.myData = [];
    },
  },
});
