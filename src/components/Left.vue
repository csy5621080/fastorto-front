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
                        <el-menu-item :index="item.index" :key="i">{{item.name}}</el-menu-item>
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
                    },
                    {
                        name: 'form2',
                        index: '2',
                    }
                ]
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                switch (key) {
                    case '1':
                        if (this.$route.name !== 'Form') {
                            this.$router.push({name: 'Form'})
                        }
                        break;
                    default:
                        break;
                }
            }
        }
    }
</script>
