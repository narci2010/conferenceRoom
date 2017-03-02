<template>
  <div class="live-item-wapper col-xs-12 col-sm-6 col-md-4 col-lg-3">
    <div class="live-item">
      <router-link class="cover" tag="a" :to="{ name: 'room', params: { id: room.id }}">
        <div class="mask">
          <i class="iconfont icon-play"></i>
        </div>
        <img :src="room.cover.r" :title="room.title"/>
      </router-link>
      <footer>
        <h3><router-link :title="room.title" tag="a" :to="{ name: 'room', params: { id: room.id }}">{{room.title}}</router-link></h3>
        <a href="#" :title="room.user.real_name"><img :src="room.user.avatar.is">{{room.user.real_name}}</a>
        <span>
          <span class="p-num" :title="'在线人数：' + room.online_number + '人'"><i class="iconfont icon-user"></i>{{room.online_number}}</span>
          <span class="state"><i class="iconfont icon-time"></i>{{room.last_open_time | startedTime}}</span>
        </span>
      </footer>
    </div>
  </div>
</template>

<script>
    export default {
      props: {
        room: Object
      },
      data () {
        return {
        }
      },
      components: {
      }
    }
</script>

<style scoped lang="less">
.live-item-wapper{
  padding: 10px;
}
@media(max-width:768px){
  .live-item-wapper{
    padding: 5px;
  }
}
.live-item{
  &:hover{
      border-bottom-color: transparent;
      box-shadow: 2px 2px 4px rgba(0,0,0,.25)
  }
  &:hover >.cover > img{
    transform: scale(1.2);
  }
  &:hover >.cover > .mask{
    opacity: 1;
  }
  transition: box-shadow .3s, border-bottom .3s;
  border-bottom: 1px solid #F0F0F0;
  background-color: #fff;
  .cover{
    position: relative;
    overflow: hidden;
    width: 100%;
    display: block;
    .mask{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0;
      z-index: 10;
      transition: opacity .3s;
      &::after{
        content: '';
        position: absolute;
        z-index: 10;
        background-color: black;
        opacity: .5;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
      i{
        position: absolute;
        color: #fff;
        z-index: 11;
        font-size: 32px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    img{
      transition: transform .3s;
      width: 100%;
      min-height: 145px;
    }
  }
  footer{
    position: relative;
    height: 52px;
    >h3{
      height: 20px;
      margin: 0;
      margin-top: 3px;
      padding: 0 20px 0 5px;
      font-size: 16px;
      line-height: 20px;
      overflow: hidden;
      >a{
        white-space: nowrap;
        text-overflow: ellipsis;
        -ms-text-overflow: ellipsis;
        color: #3A3A3A;
        font-weight: normal;
        text-decoration: none;
      }
    }
    >a{
      position: absolute;
      left: 5px;
      bottom: 5px;
      text-decoration: none;
      color: #666;
      font-size: 14px;
      line-height: 22px;
      img{
        float: left;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        margin-right: 3px;
      }
    }
    >span{
      position: absolute;
      right: 7px;
      bottom: 7px;
      cursor: pointer;
      font-size: 12px;
      color: #888;
      .iconfont{
        font-size: 16px;
        margin-right: 2px;
        &.icon-user{
          font-size: 14px;
        }
      }
      .p-num{
        margin-right: 4px;
      }
    }
  }
}
</style>
