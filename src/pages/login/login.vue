<template>
    <div class="box">
       <div class="banner">
           <i class="iconfont back icon-back" @click="$router.back()"></i>
       </div>
       <h1 class="h1">外卖猫</h1>
       <div class="toggle">
           <div class="logintype">短信登录</div>
           <div class="logintype">密码登录</div>
       </div>
       <div class="form">
           <div class="item">
               <input type="text" class="input" placeholder="手机号">
               <button class="yan">获取验证码</button>
           </div>
           <div class="item">
               <input type="text" class="input" placeholder="验证码">
           </div>
       </div>
       <div class="right">
           温馨提示：您已阅读并同意《用户服务协议》
       </div>
       <button class="login">登录</button>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/mixins.styl"
.box
 display flex
 flex-direction column
 .banner
  float left
  .back
   font-size 30px
   float left
 .h1
  color #02a774
  font-size 35px
  margin 20px auto
  font-weight 600
 .toggle
  margin 20px auto
  display flex
  flex-direction row
  .logintype
   float left
   margin 0 20px
   bottom-border-1px(#02a774)
   padding-bottom 10px
 .form
  padding 10px 20px
  .item
   width 100%
   .input
    float left
   .yan
    right 0
 .right
  color #666
  padding 20px
 .login
  background #02a774
  margin auto 20px
</style>


