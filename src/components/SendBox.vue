<template>
  <div class="send-box">
    <textarea @keyup.enter="send" v-model="message" class="danmu-textbox" spellcheck="false" :placeholder="placeholder"></textarea>
    <div @click="send" class="send-btn">发送</div>
  </div>
</template>

<script>
  export default {
    name: 'sendbox',
    props: {
      placeholder: String
    },
    data () {
      return {
        message: ''
      }
    },
    methods: {
      send () {
        this.$emit('send', this.message)
        this.message = ''
      }
    }
  }
</script>

<style scoped lang="less">
  .send-box{
    position: relative;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding-right: 50px;
    height: 55px;
    .danmu-textbox {
      height: 55px;
      width: 100%;
      padding: 5px;
      border: 0;
      background-color: transparent;
      font-size: 12px;
      outline: none;
      cursor: text;
      resize: none;
    }
    .send-btn {
      text-align: center;
      line-height: 55px;
      position: absolute;
      right: -1px;
      top: -1px;
      width: 50px;
      height: 55px;
      font-size: 14px;
      cursor: pointer;
      padding: 0;
      background-color: #4fc1e9;
      color: #fff;
      border: 0;
      border-radius: 0 5px 5px 0;
      font-family: "Microsoft YaHei";
      transition: background-color .3s;
      &:hover{
        background-color: #58D4FF;
      }
    }
  }
</style>
