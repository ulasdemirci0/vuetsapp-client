import Vue from "vue";
import Vuex from "vuex";
import {router} from "@/routes";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        API_URL: "http://localhost:8000",
        token: "",
        uid: ""
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
        setUID(state, uid) {
            state.uid = uid;
        }
    },

    actions: {
        initAuth({commit}) {
            let token = localStorage.getItem("token");
            let uid = localStorage.getItem("uid");
            if (token) {
                commit("setToken", token)
                commit("setUID", uid)
                router.push("/index")
            } else {
                router.push("/login")
            }
        }
    }

})
