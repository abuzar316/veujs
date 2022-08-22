<template>
    <div>
        <DashboardNavbarVue />
        <DashboardSidebarVue />
        <div className="dashboard-body">
            <h1>Dashboard</h1>
        </div>
    </div>
</template>

<script>
import DashboardNavbarVue from '../DashboardNavbar.vue'
import DashboardSidebarVue from '../DashboardSidebar.vue'

export default {
    name: "Dashboard",
    components: {
        DashboardSidebarVue,
        DashboardNavbarVue
    }
}
</script>
