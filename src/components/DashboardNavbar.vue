<template>
    <div>
        <div className='dashboard-navbar d-flex justify-content-space align-center'>
            <div className='logo'>
                <h1>
                    <a href='/dashboard'>dashboard</a>
                </h1>
            </div>
            <ul className='item'>
                <li v-on:click="logOut">Logout</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "DashboardNavbar",
    methods: {
        logOut() {
            localStorage.clear();
            this.$router.push({ path: '/login' });
        }
    },
}
</script>