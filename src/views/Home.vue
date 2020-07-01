<template>
    <div class="home">
        <el-container>
            <el-header>Header</el-header>

            <el-container>
                <el-aside>
                    <Left></Left>
                </el-aside>

                <el-main>
                    <router-view  v-if="isRouterAlive" >
                    </router-view>
                </el-main>
            </el-container>

            <el-footer>footer</el-footer>
        </el-container>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Left from '@/components/Left.vue'

    export default {
        name: 'Home',
        components: {
            Left
        },
        data() {
            return {
                title: '12',
            isRouterAlive: true // 页面刷新
            }
        },
        // 页面刷新
        provide() {
            return {
                reload: this.reload
            }
        },
        mounted() {
            this.axios({
                method: 'get',
                url: '/user/users/'
            }).then(response => {
            })
        },
        methods: {
            // 页面刷新
            reload() {
                this.isRouterAlive = false;

                this.$nextTick(() => {
                    this.isRouterAlive = true;
                })
            }
        }
    }
</script>
