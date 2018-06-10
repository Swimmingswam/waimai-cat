<template>
  <div class="box">
     <div class="item" :class='{on:$route.path == "/msite"}' @click='goTo("/msite")'>
       <i class="iconfont icon icon-all"></i>
       <span class="title">外卖</span>
     </div>
     <div class="item" :class='{on:$route.path == "/search"}' @click='goTo("/search")'>
       <i class="iconfont icon icon-search"></i>
       <span class="title">搜索</span>
     </div>
     <div class="item" :class='{on:$route.path == "/order"}' @click='goTo("/order")'>
       <i class="iconfont icon icon-edit"></i>
       <span class="title">订单</span>
     </div>
     <div class="item" :class='{on:$route.path == "/profile"}' @click='goTo("/profile")'>
       <i class="iconfont icon icon-account"></i>
       <span class="title">我的</span>
     </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  methods: {
    goTo (path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/mixins.styl"
 .box
  top-border-1px(#e4e4e4)
  position fixed
  bottom 0
  display flex
  justify-content space-around
  width 100%
  .item
   display flex
   flex-direction column
   .icon
    margin 10px auto
    font-size 20px
   .title
    margin-bottom 5px
  .on
    color #02a774
</style>
