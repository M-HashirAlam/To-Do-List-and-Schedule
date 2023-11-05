import {createWebHistory,createRouter } from 'vue-router'
import TodoList from "./components/TodoList.vue"
// import App from "./App.vue"
import ToDoform from "./components/ToDOForm.vue"
import SheduleForm from "./components/SheduleForm.vue"
import SheduleList from "./components/SheduleList.vue"
import HomePg from "./pages/HomePg.vue"
const routes=[
    
    {
        path:"/",
        component:HomePg
    },
    {
        name:"todo",
        path:'/todo',
        component:TodoList
    },
    {
        name:"form",
        path:"/form",
        component:ToDoform
    },
    {
        name:"Shedule",
        path:"/shedule",
        component:SheduleForm
    },
    {
        name:"SheduleList",
        path:"/sheduleList",
        component:SheduleList
    }
    
];
const router=createRouter({
    history:createWebHistory(),
    routes
});
export default router