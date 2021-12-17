import Vue from "vue";
import Vuex from "vuex";
import {router} from "@/routes";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        API_URL: "http://localhost:8000",
        token: "",
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
    },

    actions: {
        initAuth({commit}) {
            let token = localStorage.getItem("token");
            if (token) {
                commit("setToken", token)
                router.push("/index")
            } else {
                router.push("/login")
            }
        }

    }

})
