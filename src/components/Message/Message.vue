<template>
  <transition name="el-message-fade">
    <div class="message"  v-show="visable" :class="type">
      {{msg}}
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      visable: false,
      type: 'error',
      msg: '',
      delay: 2000
    }
  },
  methods: {
    destroyElement () {
      this.$el.removeEventListener('transitionend', this.destroyElement)
      this.$el.parentNode.removeChild(this.$el)
      this.$destroy(true)
    }
  },
  mounted () {
    this.visable = true
    setTimeout(() => {
      this.$el.addEventListener('transitionend', this.destroyElement)
      this.visable = false
    }, this.delay)
  }
}
</script>

<style scoped>
  .message{
    line-height: 36px;
    font-size: 14px;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99999;
    background-color: #333;
    text-align: center;
    transition: opacity .3s,transform .4s;
    border-radius: 3px;
  }
  .message.error{
    color: #a94442;
    background-color: #f2dede;
  }
  .message.info{
    color: #31708f;
    background-color: #d9edf7;
  }
  .message.success{
    color: #3c763d;
    background-color: #dff0d8;
  }
  .el-message-fade-enter,.el-message-fade-leave-active{
    opacity:0;
    -webkit-transform:translate(0, -100%);
    transform:translate(0, -100%)
  }
</style>
