<template>
    <div id="home_dashboard">
        <el-carousel :interval="4000" type="card" id="home_dashboard_carousel">
            <el-carousel-item v-for="item in 3" :key="item">
                <el-image
                        :src="'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594445076278&di=3c8c25031e9e74931fa617750ae604be&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F56%2F12%2F01300000164151121576126282411.jpg'"
                        :fit="cover"
                >
                </el-image>
                <!--                <div style="width:100%;position:absolute;z-index:2;top:85%; text-align:left;">-->
                <!--                    <h2 style="color:#fff">文字浮动在图片上方</h2>-->
                <!--                </div>-->
            </el-carousel-item>
        </el-carousel>


        <div id="home_dashboard_content" v-for="art in data_list">
            <el-card class="card">
                <template slot="header">
                    <span class="card_name">{{art.title}}</span>
                    <el-button class="card_btn" type="text" @click="goDetail(art.id)">查看详情</el-button>
                </template>
                {{art.summary}}

                <div class="footer">
                    <el-tag class="card_tag"
                            v-for="item in art.article_tag"
                            :key="item.id"
                            :type="''"
                            effect="plain">
                        {{ item.name }}
                    </el-tag>
                </div>
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
                pageNumber: 1,
                items: [
                    {type: '', label: '标签一'},
                    {type: 'success', label: '标签二'},
                    {type: 'info', label: '标签三'},
                    {type: 'danger', label: '标签四'},
                    {type: 'warning', label: '标签五'}
                ]
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
                    this.data_list = response.data.res;
                    this.total = response.data.count;
                })
            },
            handleCurrentChange(val) {
                this.getArticles(val)
            },
            goDetail(pk) {
                this.$router.push({name: 'Detail', params: {id: pk}})
            }
        }
    }
</script>

<style scoped>

</style>
