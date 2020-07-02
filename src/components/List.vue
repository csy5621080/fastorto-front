<template>
    <el-table
            :data="pai"
            style="width: 100%"
            @sort-change="handleSort"
    >
        <el-table-column
                prop="create_time"
                label="创建日期"
                sortable
                width="180"
        >
        </el-table-column>
        <el-table-column
                prop="title"
                label="标题"
                sortable
                width="240"
        >
        </el-table-column>
        <el-table-column
                prop="author_name"
                label="作者"
                width="100"
                sortable>
        </el-table-column>
        <el-table-column
                prop="article_tag"
                label="标签"
                width="180"
        >
            <template slot-scope="scope" >
                <el-tag v-for="tag_ in scope.row.article_tag" style="display:inline"> {{tag_.name}} </el-tag>
            </template>
        </el-table-column>

        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)">编辑
                </el-button>
                <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)">删除
                </el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        data() {
            return {
                tableData: []
            }
        },
        computed: {
            pai() {
                let res = this.tableData.map((value) => {
                    value.author_name = value.author.name
                    return value
                });
                return res
            }
        },
        mounted() {
            this.refreshTable()
        },
        methods: {
            filterTag() {

            },
            refreshTable() {
                this.axios({
                    method: 'get',
                    url: '/article/admin/list/1',
                }).then(response => {
                    console.log(response.data.res);
                    this.tableData = response.data.res
                })
            },
            handleSort(params) {
                this.refreshTable({order: params.order, prop: params.prop})
            },
            handleEdit(index, row) {
                this.$router.push({name: 'Editor', params: {id: row.id}})
            },
            handleDelete(index, row) {
                console.log(index, row);
            }
        }
    }
</script>
