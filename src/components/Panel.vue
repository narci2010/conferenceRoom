<template>
  <div class="panel">
    <header v-if="title !== undefined">
      <h2>{{title}}</h2>
      <div class="header_right">
        <slot name="header"></slot>
      </div>
    </header>
    <div class="body">
      <slot></slot>
    </div>
    <footer v-if="$slots['footer'] !== undefined">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default{
  name: 'panel',
  props: {
    title: String
  }
}
</script>
<style scoped lang="less">
  .panel{
    margin-bottom: 20px;
    background-color: #fff;
    border: 1px solid transparent;
    border-radius: 4px;
    box-shadow: 0 1px 1px rgba(0,0,0,.05);
    header{
      position: relative;
      z-index: 10;
      >h2{
        margin: 0;
        color: #333;
        border-color: #ddd;
        font-size: 18px;
        font-weight: 300;
        letter-spacing: 0.025em;
        line-height: 35px;
        padding: 10px 15px;
        border-bottom: 1px solid #eee;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
      }
      >.header_right{
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translate(0,-50%);
      }
    }
    .body{
      padding: 15px 15px 16px 15px;
      overflow: hidden;
      .el-table{
        overflow-y: auto;
      }
    }
    footer{
      padding: 0 0 15px 15px;
    }
  }
</style>
