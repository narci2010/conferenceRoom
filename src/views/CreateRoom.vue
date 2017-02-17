<template>
  <div class="create-room">
    <div class="container">
      <Panel title="创建房间">
        <div class="content col-xs-9 col-sm-7 col-md-6 col-lg-5">
          <div class="filed">
            <label>标题</label>
            <input type="text" placeholder="请输入房间标题">
          </div>
          <div class="filed">
            <label>密码</label>
            <input type="password" placeholder="请输入房间密码（留空表示不设密码）">
          </div>
          <div class="filed">
            <label>上传封面</label>
            <el-upload
              action="//jsonplaceholder.typicode.com/posts/"
              type="drag"
              :thumbnail-mode="true"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :default-file-list="fileList"
            >
              <i class="el-icon-upload"></i>
              <div class="el-dragger__text">将文件拖到此处，或<em>点击上传</em></div>
              <div class="el-upload__tip" slot="tip">只能上传jpg/png文件</div>
            </el-upload>
          </div>
          <div class="filed">
            <label>房间公告</label>
            <textarea rows="5" placeholder="输入房间公告"></textarea>
          </div>
          <div class="filed">
            <TButton>创建房间</TButton>
          </div>
        </div>
      </Panel>
    </div>
    <TFooter></TFooter>
  </div>
</template>
<script>
  import Panel from '../components/Panel'
  import TButton from '../components/TButton'
  export default{
    data () {
      return {
        fileList: [
        ]
      }
    },
    components: {
      Panel, TButton
    },
    methods: {
      handleRemove (file, fileList) {
        console.log(file, fileList)
      },
      handlePreview (file) {
        console.log(file)
      }
    }
  }
</script>

<style scoped lang="less">
  .content{
    margin: 0 auto;
    float: none;
    .filed{
      margin: 20px 0;
      label{
        display: block;
        vertical-align: middle;
        font-size: 14px;
        color: #5e6d82;
        line-height: 1;
        padding: 11px 12px 11px 0;
      }
      input:not([type="file"]), textarea{
        color: #444;
        width: 100%;
        height: 40px;
        outline: 0;
        border: 1px solid #ddd;
        transition: border-color .3s ease 0s;
        font-size: 14px;
        padding: 0 10px;
        &:focus{
          border: 1px solid #BABABA;
        }
      }
      textarea {
        height: inherit;
        padding: 10px;
      }
    }
  }
</style>
