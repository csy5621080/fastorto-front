<template>
    <div class="home">
        <el-container>
            <el-header>Header</el-header>

            <el-container>
                <el-aside >
                    <Left></Left>
                </el-aside>

                <el-main>
                    <router-view>
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
                title: '12'
            }
        },
        mounted() {
            this.axios({
                method: 'get',
                url: '/user/users/'
            }).then(response => {
            })
        }
    }
</script>
