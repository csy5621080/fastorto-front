<template>
    <el-container>
        <el-header>Header</el-header>
        <el-main>
        <Left></Left>
        <div class="right">
            <router-view>
            </router-view>
        </div>
        </el-main>
        <el-footer>footer</el-footer>
    </el-container>
</template>

<script>
    import Left from "./Left";
    export default {
        name: "HomeComponent",
        components: {
            Left
        }
    }
</script>

