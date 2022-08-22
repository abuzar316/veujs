<template>
    <div>
        <div class='d-flex justify-content-center vh-100 align-center'>
            <div class='pdd-5 shadow cl-3 border-radius'>
                <h1 class='text-center color-theme'>SignUp</h1>
                <form v-on:submit="handleSubmit">
                    <input type="text" class="input-control" placeholder='Name' v-model="data.name" />
                    <span class="span-error">{{ validationError.name }}</span>
                    <input type="text" class="input-control" placeholder='User Name' v-model="data.username" />
                    <span class="span-error">{{ validationError.username }}</span>
                    <input type="text" class="input-control" placeholder='Email' v-model="data.email" />
                    <span class="span-error">{{ validationError.email }}</span>
                    <input type="password" class="input-control" placeholder='Password' v-model="data.password" />
                    <span class="span-error">{{ validationError.password }}</span>
                    <div class='text-center mt-5'>
                        <button type='submit' class="btn-control">Sign Up</button>
                    </div>
                    <div class="text-center mtt-2">
                        <RouterLink to="/login">Login</RouterLink>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Validation from '../utils/Validation';
import axios from 'axios';
import { RouterLink } from 'vue-router'


export default {
    name: "SignUp",
    components: {
        RouterLink
    },
    data() {
        return {
            data: {
                name: null,
                username: null,
                email: null,
                password: null,
            },
            validationError: {}
        }
    },
    methods: {
        async handleSubmit(e) {
            e.preventDefault();
            const err = Validation(this.data);
            if (err.email || err.password || err.username || err.name) {
                console.log("validation failed");
                return this.validationError = err;;
            }
            const result = await axios.post('http://localhost:7000/api/v0/register', this.data)
            if (result.status) {
                console.log(result.data);
                return this.$router.push({ path: '/login' })
            } else {
                alert("error")
                console.log(result)
            }
        }
    }
}
</script>
