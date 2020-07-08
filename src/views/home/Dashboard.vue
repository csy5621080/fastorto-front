<template>
    <div id="home_dashboard">
        <el-carousel :interval="4000" type="card" id="home_dashboard_carousel">
            <el-carousel-item v-for="item in 3" :key="item">
                <h3 class="medium">{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>


        <div id="home_dashboard_content" v-for="art in data_list">
            <el-card class="card">
                <template slot="header">
                    <span class="card_name">{{art.title}}</span>
                    <el-button class="card_btn" type="text">查看详情</el-button>
                </template>

                {{art.summary}}
            </el-card>
        </div>

        <div class="block">
            <el-pagination
                    @current-change="handleCurrentChange"
                    :page-size="10"
                    :page-number="pageNumber"
                    layout="total, prev, pager, next, jumper"
                    :total="total">
            </el-pagination>
        </div>
    </div>
</template>

<script>

    export default {
        name: "HomeDashboard",
        data() {
            return {
                data_list: [],
                total: 1,
                pageNumber: 1
            }
        },
        components: {},
        mounted() {
            this.getArticles(this.pageNumber)
        },
        methods: {
            getArticles(page_num) {
                this.axios({
                    method: 'get',
                    url: '/article/list/' + page_num,
                }).then(response => {
                    console.log(response.data.res);
                    this.data_list = response.data.res;
                    this.total = response.data.count;
                })
            },
            handleCurrentChange(val) {
                this.getArticles(val)
            }
        }
    }
</script>

<style scoped>

</style>
