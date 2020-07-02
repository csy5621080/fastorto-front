<template>
    <div>
        <el-tag
                :key="tag"
                v-for="tag in dynamicTags"
                closable
                :disable-transitions="false"
                @close="handleClose(tag)">
            {{tag.name}}
        </el-tag>
        <el-input
                class="input-new-tag"
                v-if="inputVisible"
                v-model="inputValue"
                ref="saveTagInput"
                size="small"
                @keyup.enter.native="handleInputConfirm"
                @blur="handleInputConfirm"
        >
        </el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
    </div>

</template>

<script>

    export default {
        name: "Tags",
        data() {
            return {
                dynamicTags: [],
                inputVisible: false,
                inputValue: ''
            };
        },
        methods: {
            get_tags(){
                this.axios({
                    method: 'get',
                    url: '/tags/list',
                }).then(response => {
                    this.dynamicTags = response.data
                })
            },
            handleClose(tag) {
                this.axios({
                    method: 'delete',
                    url: '/tags/del/' + tag.id,
                }).then(response => {

                })
                this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
            },

            showInput() {
                this.inputVisible = true;
                this.$nextTick(_ => {
                    this.$refs.saveTagInput.$refs.input.focus();
                });
            },

            handleInputConfirm() {
                this.axios.post('/tags/create', {
                    name: this.inputValue

                }).then(response => {
                    this.dynamicTags.push(response.data)
                })
                let inputValue = {name: this.inputValue};
                if (inputValue) {
                    this.dynamicTags.push(inputValue);
                }
                this.inputVisible = false;
                this.inputValue = '';
            }
        },
        mounted() {
            this.get_tags()
        },

    }
</script>

<style scoped>

</style>
