import Vue from "vue";
import VueRouter from "vue-router";


import Login from "./components/Login";
import Register from "./components/Register"
import index from "./components/Index"
import store from "./store"

Vue.use(VueRouter);
const routes = [
    {path: "/", component: Login},
    {
        path: "/index", component: index,
        beforeEnter: (to, from, next) => {
            if (store.state.token.length > 0 || localStorage.getItem("token").length > 1) {
                store.commit("setToken", localStorage.getItem("token"))
                next()
            } else {
                next("/login")
            }
        }
    },
    {path: "/login", component: Login},
    {path: "/register", component: Register}
];

export const router = new VueRouter({
    mode: "history", routes
});