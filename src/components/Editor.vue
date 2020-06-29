<template>
    <div class="editor">
        <div ref="editor"></div>

        <el-form ref="form" :model="form" label-width="80px" class="form">
            <el-form-item label="标题">
                <el-input v-model="form.name"></el-input>
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
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="">
                <el-radio-group v-model="form.resource">
                    <el-radio label="私密"></el-radio>
                    <el-radio label="公开"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="摘要">
                <el-input type="textarea" v-model="form.desc"></el-input>
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
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                form: {
                    value: []
                }
            }
        }
        ,
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
        ,
        mounted() {
            var editor = new E(this.$refs.editor)
            editor.customConfig.showLinkImg = false;
            editor.customConfig.uploadImgServer = '/upload_img/';
            editor.customConfig.uploadImgHeaders = {'Accept': 'application/json'};
            editor.customConfig.uploadFileName = 'file';
            // 自定义配置颜色（字体颜色、背景色）
            editor.customConfig.colors = [
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
            editor.customConfig.uploadImgHooks = {
                success: function (xhr, editor, result) {
                    save_path = result.data[0]
                }
            };
            editor.create();
            editor.$textContainerElem.css('height', 'calc(100vh - 190px - 300px) !important');
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
