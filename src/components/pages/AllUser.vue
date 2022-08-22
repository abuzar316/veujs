<template>
    <div>
        <DashboardNavbarVue />
        <DashboardSidebarVue />
        <div class="dashboard-body">
            <h1>All user</h1>
            <div class='user-table pdd-5'>
                <table class='cl-12' border="1" collapse="collapse">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>Email</th>
                            <th>username</th>
                            <th>Delete</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item, index in allUser">
                            <th>{{ index + 1 }}</th>
                            <th>{{ item.name }}</th>
                            <th>{{ item.email }}</th>
                            <th>{{ item.username }}</th>
                            <th><button v-on:click="deleteUser(item._id)" class="btn-control">Delete</button></th>
                            <th><button class="btn-control" v-on:click="selectUser(item)">edit</button></th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="model-overlay " :class="{ 'visible-show': openModal }" v-on:click="openModal = !openModal"></div>
        <div class="model-container border-radius" :class="{ 'visible-show': openModal }">
            <div class='model pdd-4'>
                <form v-on:submit="updateUser">
                    <input type="text" placeholder='Email' v-model="editUser.email" class="input-control" />
                    <input type="text" placeholder='Name' v-model="editUser.name" class="input-control" />
                    <input type="text" placeholder='username' v-model="editUser.username" class="input-control" />
                    <div class='text-center mt-5'>
                        <button type="submit" class="btn-control">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import DashboardNavbarVue from '../DashboardNavbar.vue'
import DashboardSidebarVue from '../DashboardSidebar.vue'
import axios from 'axios';

const token = localStorage.getItem('token');


export default {
    name: "Dashboard",
    components: {
        DashboardSidebarVue,
        DashboardNavbarVue
    },
    data() {
        return {
            allUser: [],
            openModal: false,
            editUser: {}
        }
    },
    methods: {
        selectUser(user) {
            this.openModal = !this.openModal
            this.editUser = user
            // console.log(user)
        },
        async getAllUser() {
            const result = await axios.get('http://localhost:7000/api/v0/allusers', {
                headers: {
                    'Authorization': 'Bearer ' + token,
                },
            });
            this.allUser = result.data.alluser;
            // console.log(result.data)
        },
        async deleteUser(id) {
            try {
                const result = await axios.delete(`http://localhost:7000/api/v0/deleteuser/${id}`, {
                    headers: {
                        'Authorization': 'Bearer ' + token,
                    },
                });
                if (result.data.status) {
                    alert(result.data.message);
                    this.getAllUser();
                }
            } catch (error) {
                console.log(error)
                alert(error.response.data.message)
            }
        },
        async updateUser(e) {
            try {
                e.preventDefault();
                this.openModal = !this.openModal
                // console.log(this.editUser._id)
                const result = await axios.put(`http://localhost:7000/api/v0/edituser/${this.editUser._id}`, this.editUser, {
                    headers: {
                        'Authorization': 'Bearer ' + token,
                    }
                });
                if (result.data.status) {
                    // console.log(result.data)
                    alert("update user");
                    // this.getAllUser();
                }
            } catch (error) {
                console.log(error)
                alert(error.response.data.message)
            }
        }
    },
    async mounted() {
        const result = await axios.get('http://localhost:7000/api/v0/allusers', {
            headers: {
                'Authorization': 'Bearer ' + token,
            },
        });
        this.allUser = result.data.alluser;
        // console.log(result.data)
    },

}
</script>
