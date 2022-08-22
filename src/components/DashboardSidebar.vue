<template>
    <div>
        <div className="dashboard-sidebar">
            <ul className="item">
                <li><RouterLink to='/dashboard'>dashboard</RouterLink></li>
                <li><RouterLink to='/admin/alluser'>All User</RouterLink></li>
                <!-- <li><a href='/admin/create/user'>Create User</a></li> -->
                <li><RouterLink to='/profile'>profile</RouterLink></li>
            </ul>
        </div>
    </div>
</template>

<script>
// import { RouterLink } from 'vue-router'

export default {
    name: "DashboardSidebar",

}
</script>