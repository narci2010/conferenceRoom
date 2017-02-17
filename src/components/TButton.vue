<template>
  <button class="btn"><slot></slot></button>
</template>

<script>
  export default{
    data () {
      return {
      }
    },
    components: {
    }
  }
</script>

<style scoped lang="less">
  .btn{
    outline: 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
    color: #fff;
    cursor: pointer;
    display: block;
    font-size: 16px;
    letter-spacing: 2px;
    text-align: center;
    border: none;
    background-color: #1296DB;
    border-radius: 2px;
    margin: 35px auto 0;
    &:hover{
      background-color: #5B7BDB;
    }
    &:active{
      background-color: #316cdb;
    }
  }
</style>
