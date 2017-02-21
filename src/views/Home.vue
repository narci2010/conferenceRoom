<template>
  <div class="home">
      <div class="container content">
        <LiveItem :img="img" v-for="img in imgs"></LiveItem>
      </div>
    <TFooter></TFooter>
  </div>
</template>

<script>
  import LiveItem from '../components/LiveItem'
  export default {
    name: 'home',
    components: {
      LiveItem
    },
    data () {
      return {
        imgs: [
          'https://rpic.douyucdn.cn/a1702/21/20/264297_170221201753.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/477076_170221203336.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/539270_170221202526.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/497976_170221203219.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/295415_170221203300.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/616040_170221203415.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/1319703_170221204017.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/645590_170221201926.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/227670_170221203353.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/491412_170221201644.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/1059994_170221203156.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/67373_170221203817.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/242967_170221202306.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/308009_170221202933.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/96291_170221203945.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/209436_170221202346.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/63623_170221203221.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/138092_170221203147.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/211086_170221202346.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/85829_170221203953.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/261291_170221201741.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/638575_170221201607.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/138286_170221203211.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/154537_170221202513.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/134000_170221203329.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/58428_170221203227.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/220149_170221202334.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/1600931_170221202335.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/97590_170221204115.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/24422_170221202601.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/138243_170221202614.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/266055_170221202520.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/793400_170221201744.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/773057_170221204007.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/319721_170221202508.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/9293_170221204115.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/221869_170221203407.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/846805_170221204108.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/1080583_170221202554.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/633019_170221202605.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/70231_170221204114.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/288016_170221201923.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/93912_170221202513.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/312410_170221204048.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/1495611_170221203236.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/28101_170221203254.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/474244_170221203220.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/673484_170221202504.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/79663_170221204012.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/1688781_170221203151.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/1275878_170221201925.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/15177_170221204126.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/260965_170221203100.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/1318035_170221203135.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/1247157_170221203328.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/1420682_170221203917.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/52876_170221202520.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/534740_170221203328.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/20360_170221203400.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/466743_170221202624.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/805131_170221202600.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/1685597_170221202532.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/252827_170221202343.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/1593053_170221203851.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/594731_170221203054.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/601774_170221202342.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/122943_170221203251.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/625651_170221203330.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/320155_170221202332.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/228686_170221204119.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/259057_170221202350.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/107053_170221202559.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/796666_170221202656.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/333541_170221203241.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/610484_170221201658.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/788495_170221201655.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/905237_170221202558.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/941708_170221204057.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/1746151_170221201907.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/227670_170221203353.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/6324_170221203329.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/507204_170221202508.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/424591_170221203413.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/85963_170221202507.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/72166_170221201658.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/1044960_170221202353.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/449703_170221202349.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/228866_170221203357.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/659980_170221202534.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/229537_170221202502.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/510541_170221201631.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/522423_170221201927.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/1526153_170221202355.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/535791_170221203212.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/148550_170221202347.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/68318_170221202622.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/258702_170221203259.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/131922_170221203341.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/35651_170221202939.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/255329_170221203221.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/291514_170221203252.jpg',
          'https://rpic.douyucdn.cn/a1702/21/14/265688_170221144842.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/214514_170221203238.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/142823_170221203356.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/5748_170221202345.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/1449125_170221203414.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/533627_170221202513.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/556433_170221204121.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/255865_170221203227.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/217331_170221203259.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/318624_170221203318.jpg',
          'https://rpic.douyucdn.cn/a1702/21/20/428250_170221202347.jpg'
        ]
      }
    },
    mounted () {
    }
  }
</script>

<style lang="less" scoped>
  .content{
    overflow: hidden;
  }
</style>
