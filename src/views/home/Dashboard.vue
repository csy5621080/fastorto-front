<template>
    <div id="home_dashboard">
        <el-carousel :interval="4000" type="card" id="home_dashboard_carousel">
            <el-carousel-item v-for="item in 3" :key="item">
                <h3 class="medium">{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>


        <div id="home_dashboard_content">
            <el-card class="card">
                <template slot="header">
                    <span class="card_name">卡片名称</span>
                    <el-button class="card_btn" type="text">操作按钮</el-button>
                </template>

                <div v-for="o in 4" :key="o">
                    {{'列表内容 ' + o }}
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>

    export default {
        name: "HomeDashboard",
        components: {},
    }
</script>

<style scoped>

</style>
