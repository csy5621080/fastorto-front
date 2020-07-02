<template>
    <el-menu
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
        <el-submenu index="0">
            <template slot="title">
                <i class="el-icon-menu"></i>
                <span slot="title">导航</span>
                <el-menu-item-group>
                    <template v-for="(item,i) in menu">
                        <el-menu-item :index="item.index" :key="i">{{item.show_name}}</el-menu-item>
                    </template>
                </el-menu-item-group>
            </template>
        </el-submenu>
    </el-menu>
</template>

<style>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
</style>

<script>
    export default {
        data() {
            return {
                menu: [
                    {
                        name: 'form',
                        index: '1',
                        show_name: '表单'
                    },
                    {
                        name: 'editor',
                        index: '2',
                        show_name: '新建'
                    },
                    {
                        name: 'tags',
                        index: '3',
                        show_name: '标签'
                    }
                ]
            };
        },
        inject: ['reload'], // 注入reload方法
        methods: {
            handleSelect(key, keyPath) {
                switch (key) {
                    case '1':
                        if (this.$route.path.indexOf('/list') === -1) {
                            this.$router.push({name: 'List'})
                        }
                        break;
                    case '2':
                        if (this.$route.path.indexOf('/editor/0') === -1) {
                            this.$router.push({name: 'Editor', params: {id: 0}})
                            this.reload()
                        }
                        break;
                    case '3':
                        if (this.$route.path.indexOf('/tags') === -1) {
                            this.$router.push({name: 'Tags'})
                            this.reload()
                        }
                        break;
                    default:
                        break;
                }
            }
        }
    }
</script>
