<template>
    <div id="home_admin">
        <div id="home_admin_menu">
            <Left></Left>
        </div>

        <div id="home_admin_content">
            <router-view>
            </router-view>
        </div>
    </div>
</template>

<script>
    import Left from '@/components/Left.vue'

    export default {
        name: "HomeAdmin",
        components: {
            Left
        },
    }
</script>
