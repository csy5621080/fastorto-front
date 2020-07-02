<template>
    <div class="editor">
        <div ref="editor" style="text-align:left"></div>

        <el-form ref="form" :model="form" label-width="80px" class="form">
            <el-form-item label="标题">
                <el-input v-model="form.title"></el-input>
            </el-form-item>

            <el-form-item label="标签">
                <el-select
                        v-model="form.value"
                        multiple
                        collapse-tags
                        style="margin-left: 20px;"
                        placeholder="请选择">
                    <el-option
                            v-for="item in options"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="">
                <el-radio-group v-model="form.is_public">
                    <el-radio :label="false">私密</el-radio>
                    <el-radio :label="true">公开</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="摘要">
                <el-input type="textarea" v-model="form.summ"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">提交</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import E from 'wangeditor'

    export default {
        name: 'Editor',
        data() {
            return {
                options: [],
                form: {
                    title: '',
                    is_public: '',
                    summ: '',
                    value: []
                },
                info: ''
            }
        },
        inject: ['reload'], // 注入reload方法
        methods: {
            onSubmit() {
                if (this.$route.params.id > 0) {
                    console.log(this.form);
                    this.axios.patch('/article/update/' +this.$route.params.id, {
                        title: this.form.title,
                        is_public: this.form.is_public,
                        summary: this.form.summ,
                        tags: this.form.value,
                        body: this.editor.txt.html()
                    }).then(response => {
                        // const query = {name: 'Editor', params: {id: response.data.id}}
                        // this.$router.push(query)
                    })
                } else {
                    this.axios.post('/article/push', {
                        title: this.form.title,
                        is_public: this.form.is_public,
                        summary: this.form.summ,
                        tags: this.form.value,
                        body: this.editor.txt.html()
                    }).then(response => {
                        console.log(this.form);
                        // const query = {name: 'Editor', params: {id: response.data.id}}
                        // this.$router.push(query)
                    })
                }
            },
            loadArticle() {
                if (parseInt(this.$route.params.id)) {
                    this.axios({
                        method: 'get',
                        url: '/article/admin/detail/' + this.$route.params.id,
                    }).then(response => {
                        this.editor.txt.html(response.data.body);
                        this.form.title = response.data.title;
                        this.form.is_public = response.data.is_public;
                        this.form.summ = response.data.summary;
                        this.form.value = response.data.article_tag_ids;
                    })
                } else {
                    this.editor.txt.html()
                }

            },
            loadTags() {
                this.axios({
                    method: 'get',
                    url: '/tags/list',
                }).then(response => {
                    this.options = response.data
                })
            }
        }
        ,
        mounted() {
            this.editor = new E(this.$refs.editor);
            this.editor.customConfig.showLinkImg = false;
            this.editor.customConfig.uploadImgServer = '/article/upload_img/';
            this.editor.customConfig.uploadImgHeaders = {'Accept': 'application/json'};
            this.editor.customConfig.uploadFileName = 'file';
            // 自定义配置颜色（字体颜色、背景色）
            this.editor.customConfig.colors = [
                '#000000',
                '#eeece0',
                '#1c487f',
                '#4d80bf',
                '#c24f4a',
                '#8baa4a',
                '#7b5ba1',
                '#46acc8',
                '#f9963b',
                '#ffffff'
            ];
            var save_path = '';
            this.editor.customConfig.uploadImgHooks = {
                success: function (xhr, editor, result) {
                    save_path = result.data[0]
                }
            };
            this.editor.customConfig.onchange = (html) => {
                this.info_ = html // 绑定当前逐渐地值
                this.$emit('change', this.info) // 将内容同步到父组件中
            }
            this.editor.create();
            this.editor.$textContainerElem.css('height', 'calc(100vh - 190px - 300px) !important');
            this.loadTags();
            this.loadArticle();
        }
    }
</script>


<style scoped lang="scss">
    .editor {

        .form {
            margin-top: 20px;
            text-align: left;

        }
    }
</style>
