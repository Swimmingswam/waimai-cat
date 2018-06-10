<template>
  <div class="box">
    <headerTop title="我的"/>
    <router-link to="./login" class="login">
      <i class="iconfont user icon-account"></i>
      <div class="content">
        <h6 class="h6">登录/注册</h6>
        <h6 class="h6">暂无绑定手机号</h6>
      </div>
      <i class="iconfont more icon-more"></i>
    </router-link>
    <div class="message">
      <div class="item">
        <h3 class="h3">0.00元</h3>
        <h5 class="h5">我的余额</h5>
      </div>
      <div class="item">
        <h3 class="h3">0个</h3>
        <h5 class="h5">我的优惠</h5>
      </div>
      <div class="item">
        <h3 class="h3">0分</h3>
        <h5 class="h5">我的积分</h5>
      </div>
    </div>
    <div class="line">
    </div>
    <div class="main">
      <div class="heighline">我的订单</div>
      <div class="heighline">会员中心</div>
      <div class="heighline">商城积分</div>
      <div class="heighline"></div>
    </div>
  </div>
</template>

<script>
import headerTop from '../../components/headerTop/headerTop.vue'
export default {
  data: function () {
    return {
    }
  },
  components: {
    headerTop: headerTop
  }
}
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/mixins.styl"
 .box
  display flex
  flex-direction column
  bottom-border-1px(#eee)
  .login
   height 100px
   background #02a774
   margin-top 35px
   clearFix()
   .user
    font-size 50px
    float left
    margin-top 30px
   .content
    float left
    margin-top 25px
    margin-left 20px
    .h6
     margin 10px
   .more
     float right
     margin-top 45px
     margin-right 20px
  .message
   display flex
   flex-direction row
   .item
     border-right 1px solid #666
     padding 5px
     flex 1
    .h3
     color #F5A100
     margin 5px
    .h5
     color red
  .line
   height 10px
   width 100%
   background #999
  .main
   border-bottom 1px solid #999
   .heighline
     bottom-border-1px(#999)
     line-height 50px
     height 50px
</style>
