<template>
    <div>
        <div class='d-flex justify-content-center vh-100 align-center'>
            <div class='pdd-5 shadow cl-3 border-radius'>
                <h1 class='text-center color-theme'>SignUp</h1>
                <form v-on:submit="handleSubmit">
                    <input type="text" class="input-control" placeholder='Email' v-model="data.email" />
                    <span class="span-error">{{ validationError.email }}</span>
                    <input type="password" class="input-control" placeholder='Password' v-model="data.password" />
                    <span class="span-error">{{ validationError.password }}</span>
                    <div class='text-center mt-5'>
                        <button type='submit' class="btn-control">login</button>
                    </div>
                    <div class="text-center mtt-2">
                        <RouterLink to="/">SignUp</RouterLink>
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
import { mapActions } from 'vuex';


export default {
    name: "SignUp",
    components: {
        RouterLink
    },
    data() {
        return {
            data: {
                email: null,
                password: null,
            },
            validationError: {}
        }
    },
    methods: {
        ...mapActions(['loginUser']),
        async handleSubmit(e) {
            try {
                e.preventDefault();
                const err = Validation(this.data);
                if (err.email || err.password) {
                    console.log("validation failed");
                    return this.validationError = err;;
                }
                console.log(this.loginUser)
                this.loginUser(this.data);
            } catch (error) {
                alert(error.response.data.message)
                console.log(error.response.data)
            }
        }
    }
}
</script>
