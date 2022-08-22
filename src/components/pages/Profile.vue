<template>
    <div>
        <DashboardNavbarVue />
        <DashboardSidebarVue />
        <div className="dashboard-body">
            <h1>profile</h1>
            <div className='  d-flex justify-content-center vh-100 align-center'>
                <div className='pdd-5 shadow cl-3 border-radius'>
                    <h1 className='text-center color-theme'>Update profile</h1>
                    <form v-on:submit="handleSubmit">
                        <input type="text" class="input-control" placeholder='Name' v-model="user.name" />
                        <span class="span-error">{{ validationError.name }}</span>
                        <input type="text" class="input-control" placeholder='User Name' v-model="user.username" />
                        <span class="span-error">{{ validationError.username }}</span>
                        <input type="text" class="input-control" placeholder='Email' v-model="user.email" />
                        <span class="span-error">{{ validationError.email }}</span>
                        <div class='text-center mt-5'>
                            <button type='submit' class="btn-control">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DashboardNavbarVue from '../DashboardNavbar.vue'
import DashboardSidebarVue from '../DashboardSidebar.vue'
import axios from 'axios';
import Validation from '../../utils/Validation';

const token = localStorage.getItem('token');


export default {
    name: "Profile",
    components: {
        DashboardSidebarVue,
        DashboardNavbarVue
    },
    data() {
        return {
            user: {
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
            const err = Validation(this.user);
            if (err.email || err.password || err.username || err.name) {
                console.log("validation failed");
                return this.validationError = err;;
            }
            console.log("done")
            const result = await axios.put('http://localhost:7000/api/v0/profileupdate', this.user, {
                headers: {
                    'Authorization': 'Bearer ' + token,
                },
            })
            if (result.status) {
                alert(result.data.message)
                console.log(result.data);
            } else {
                alert("error")
                console.log(result)
            }
        }
    },
    async mounted() {
        const result = await axios.get('http://localhost:7000/api/v0/profile', {
            headers: {
                'Authorization': 'Bearer ' + token,
            },
        });
        this.user = result.data.user;
        // console.log(result.data)
    },
}  
</script>
