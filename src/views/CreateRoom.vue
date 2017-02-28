<template>
  <div class="create-room">
    <div class="container">
      <Panel title="创建房间">
        <div class="content col-xs-9 col-sm-7 col-md-6 col-lg-5">
          <div class="filed">
            <label>标题</label>
            <input v-model="room.title" type="text" placeholder="请输入房间标题">
          </div>
          <div class="filed switch">
            <label>密码</label>
            <TSwitch v-model="room.need_password" off-text="不使用密码" on-text="使用密码"></TSwitch>
            <div class="hide-elem" v-if="room.need_password">
              <input v-model="room.password" type="password" placeholder="请输入房间密码">
            </div>
          </div>
          <div class="filed switch">
            <label>封面</label>
            <TSwitch v-model="room.is_custom_cover" off-text="使用实时分面" on-text="上传自定义封面"></TSwitch>
            <div class="hide-elem" v-if="room.is_custom_cover">
              <el-upload
                :headers="{
                  Authorization: 'Bearer ' + $getToken()
                }"
                :action="$http.options.root + '/ajax_upload_picture'"
                type="drag"
                :thumbnail-mode="true"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :on-success="uploadSucc"
                :multiple="false"
              >
                <i class="el-icon-upload"></i>
                <div class="el-dragger__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件</div>
              </el-upload>
            </div>
          </div>
          <div class="filed">
            <label>房间公告</label>
            <textarea v-model="room.notice" rows="5" placeholder="输入房间公告"></textarea>
          </div>
          <div class="filed">
            <TButton @click.native="createRoom">创建房间</TButton>
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
  import TSwitch from '../components/TSwitch'
  import api from '../api'
  export default{
    data () {
      return {
        room: {
          'title': '潜心研究三年，独创平行四边形打野',
          'notice': '',
          'is_custom_cover': false,
          'custom_cover': '',
          'need_password': false,
          'password': ''
        }
      }
    },
    watch: {
      'room.is_custom_cover' () {
        this.$updataIscroll()
      },
      'room.need_password' () {
        this.$updataIscroll()
      }
    },
    components: {
      Panel, TButton, TSwitch
    },
    methods: {
      handleRemove (file, fileList) {
        console.log(file, fileList)
      },
      handlePreview (file) {
        console.log(file)
      },
      uploadSucc (response, file, fileList) {
        this.room.custom_cover = response.picture
      },
      createRoom () {
        api.createRoom(this.room).then(res => {
          this.$router.push({name: 'host'})
        }, res => {
        })
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
      &.switch{
        min-height: 60px;
        position: relative;
        >.hide-elem{
          margin-top: 54px;
        }
        .t-Switch{
          position: absolute;
          left: 5px;
          top: 42px;
        }
      }
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
