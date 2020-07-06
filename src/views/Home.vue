<template>
    <div id="home">
        <el-header id="home_header">
            <div class="menu">
                <template v-for="(item,i) in menu">
                    <div class="menu_item" @click="linkToMenu(item.name)">{{item.show_name}}</div>
                </template>
            </div>
        </el-header>

        <div id="home_content">
            <router-view v-if="isRouterAlive"></router-view>
        </div>

        <el-footer id="home_footer">footer</el-footer>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'Home',
        data() {
            return {
                menu: [
                    {
                        name: 'HomeAdmin',
                        show_name: 'admin'
                    },
                    {
                        name: 'HomeDashboard',
                        show_name: 'dashboard'
                    },
                ],
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
        },
        methods: {
            // 点击菜单
            linkToMenu(name) {
                this.$router.push({name: name})
            },

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
