<template>


    <div class="container mt-5">
        <div class="row d-flex justify-content-center">
            <div class="col-md-6">
                <div class="card px-5 py-5" id="form1">
                    <form @submit.prevent="post" class="form-data">

                        <div class="forms-inputs mb-4">
                            <span>Email</span>
                            <input autocomplete="off"
                                   type="email"
                                   v-model="email"
                                   required>
                        </div>

                        <div class="forms-inputs mb-4">
                            <span>Username</span>
                            <input autocomplete="off"
                                   type="text"
                                   v-model="username"
                                   required>
                        </div>

                        <div class="forms-inputs mb-4">
                            <span>Password</span>
                            <input autocomplete="off"
                                   type="password"
                                   v-model="password"
                                   required>
                        </div>

                        <div class="mb-3">
                            <button type="submit" class="btn btn-dark w-100">Kayıt</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
import axios from "axios";

export default {
    name: "Register",
    data() {
        return {
            email: '',
            username: '',
            password: ''
        }
    },
    methods: {
        post() {
            axios.post(this.$store.state.API_URL + "/register", {
                email: this.email,
                username: this.username,
                password: this.password
            });
        }
    }
}
</script>

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
