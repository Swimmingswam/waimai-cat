<template>
  <div class="box">
    <headerTop title="外卖猫外卖">
      <i class="iconfont icon-search icon" slot="left"></i>
      <span class="login" slot="right">登录/注册</span>
    </headerTop>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="box">
            <div class="item">
              <span class="title">标题</span>
              <img src="./imgs/ham.jpg" alt="" class="ham">
            </div>
             <div class="item">
              <span class="title">标题</span>
              <img src="./imgs/ham.jpg" alt="" class="ham">
            </div>
             <div class="item">
              <span class="title">标题</span>
              <img src="./imgs/ham.jpg" alt="" class="ham">
            </div>
          </div>
          <div class="box">
            <div class="item">
              <span class="title">标题</span>
              <img src="./imgs/ham.jpg" alt="" class="ham">
            </div>
             <div class="item">
              <span class="title">标题</span>
              <img src="./imgs/ham.jpg" alt="" class="ham">
            </div>
             <div class="item">
              <span class="title">标题</span>
              <img src="./imgs/ham.jpg" alt="" class="ham">
            </div>
          </div>
          <div class="box">
            <div class="item">
              <span class="title">标题</span>
              <img src="./imgs/ham.jpg" alt="" class="ham">
            </div>
             <div class="item">
              <span class="title">标题</span>
              <img src="./imgs/ham.jpg" alt="" class="ham">
            </div>
             <div class="item">
              <span class="title">标题</span>
              <img src="./imgs/ham.jpg" alt="" class="ham">
            </div>
          </div>
          <div class="box">
            <div class="item">
              <span class="title">标题</span>
              <img src="./imgs/ham.jpg" alt="" class="ham">
            </div>
             <div class="item">
              <span class="title">标题</span>
              <img src="./imgs/ham.jpg" alt="" class="ham">
            </div>
             <div class="item">
              <span class="title">标题</span>
              <img src="./imgs/ham.jpg" alt="" class="ham">
            </div>
          </div>
        </div>
         <div class="swiper-slide">
          <div class="box">
            <div class="item">
              <span class="title">标题</span>
              <img src="./imgs/ham.jpg" alt="" class="ham">
            </div>
             <div class="item">
              <span class="title">标题</span>
              <img src="./imgs/ham.jpg" alt="" class="ham">
            </div>
             <div class="item">
              <span class="title">标题</span>
              <img src="./imgs/ham.jpg" alt="" class="ham">
            </div>
          </div>
          <div class="box">
            <div class="item">
              <span class="title">标题</span>
              <img src="./imgs/ham.jpg" alt="" class="ham">
            </div>
             <div class="item">
              <span class="title">标题</span>
              <img src="./imgs/ham.jpg" alt="" class="ham">
            </div>
             <div class="item">
              <span class="title">标题</span>
              <img src="./imgs/ham.jpg" alt="" class="ham">
            </div>
          </div>
          <div class="box">
            <div class="item">
              <span class="title">标题</span>
              <img src="./imgs/ham.jpg" alt="" class="ham">
            </div>
             <div class="item">
              <span class="title">标题</span>
              <img src="./imgs/ham.jpg" alt="" class="ham">
            </div>
             <div class="item">
              <span class="title">标题</span>
              <img src="./imgs/ham.jpg" alt="" class="ham">
            </div>
          </div>
          <div class="box">
            <div class="item">
              <span class="title">标题</span>
              <img src="./imgs/ham.jpg" alt="" class="ham">
            </div>
             <div class="item">
              <span class="title">标题</span>
              <img src="./imgs/ham.jpg" alt="" class="ham">
            </div>
             <div class="item">
              <span class="title">标题</span>
              <img src="./imgs/ham.jpg" alt="" class="ham">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="shopers">
      <div class="banner">附近商家：</div>
      <shoperlist></shoperlist>
    </div>
  </div>
</template>

<script>
import headerTop from '../../components/headerTop/headerTop.vue'
import shoperlist from '../../components/shoperlist/shoperlist.vue'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  mounted () {
    var mySwiper = new Swiper('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination'
      }
    })
  },
  data: function () {
    return {
      data: 111
    }
  },
  components: {
    headerTop: headerTop,
    shoperlist: shoperlist
  }
}
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/mixins.styl"
.box
 display: flex
 flex-direction: column
 margin-bottom 100px
 margin-top: 50px
 .swiper-container
  margin -200px 0 -90px 0
  .swiper-slide
    display flex
    flex-wrap wrap
    .item
     display flex
     flex-direction column
     width: 80px
     text-align center
     justify-content space-around
     .title
      width 50px
      display block
     .ham
      width: 50px
      height: 50px
  .shopers
   display flex
   flex-direction column
   margin-top 500px
   .banner
    height 30px
    bottom-border-1px(#ccc)
 .swiper-pagination
  margin 200px 150px

</style>
