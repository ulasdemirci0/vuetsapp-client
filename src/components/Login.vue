<template>
<span>
    <router-link to="/login" tag="a">Giriş</router-link>
        <br>
        <router-link to="/register" tag="a">Kayıt</router-link>
    <div class="container mt-5">
        <div class="row d-flex justify-content-center">
            <div class="col-md-6">
                <div class="card px-5 py-5" id="form1">
                    <form @submit.prevent="post" class="form-data">
                        <div class="forms-inputs mb-4"><span>Email or username</span>
                            <input autocomplete="off"
                                   type="email"
                                   v-model="email"
                                   required>
                        </div>
                        <div class="forms-inputs mb-4"><span>Password</span>
                            <input autocomplete="off"
                                   type="password"
                                   v-model="password"
                                   required>
                        </div>
                        <div class="mb-3">
                            <button type="submit" class="btn btn-dark w-100">Giriş</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</span>
</template>

<script>
import axios from "axios"

export default {
    name: 'Login',
    data() {
        return {
            email: "",
            password: "",
            store: this.$store
        }
    },
    methods: {

        post() {
            const vm = this
            axios.post(this.$store.state.API_URL + "/login", {
                "email": this.email,
                "password": this.password
            }).then(function (response) {
                localStorage.setItem("token", response.data.token);
                vm.$store.commit("setToken", response.data.token);
                vm.$router.push("/index");
            });

        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

body {
    background: #000
}

.card {
    border: none;
    height: 320px
}

.forms-inputs {
    position: relative
}

.forms-inputs span {
    position: absolute;
    top: -18px;
    left: 10px;
    background-color: #fff;
    padding: 5px 10px;
    font-size: 15px
}

.forms-inputs input {
    height: 50px;
    border: 2px solid #eee
}

.forms-inputs input:focus {
    box-shadow: none;
    outline: none;
    border: 2px solid #000
}

.btn {
    height: 50px
}

.success-data {
    display: flex;
    flex-direction: column
}

.bxs-badge-check {
    font-size: 90px
}
</style>
