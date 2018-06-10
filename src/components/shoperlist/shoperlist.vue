<template>
    <div class="list">
        <div class="shoper">
          <div class="left">
            <img src="./imgs/ham.jpg" alt="" class="img">
          </div>
          <div class="main">
            <h6 class="h6">商家名</h6>
            <h6 class="h6">商家评分</h6>
            <h6 class="h6">￥20 起送 ￥5 配送费</h6>
          </div>
        </div>
        <div class="shoper">
          <div class="left">
            <img src="./imgs/ham.jpg" alt="" class="img">
          </div>
          <div class="main">
            <h6 class="h6">商家名</h6>
            <h6 class="h6">商家评分</h6>
            <h6 class="h6">￥20 起送 ￥5 配送费</h6>
          </div>
        </div>
        <div class="shoper">
          <div class="left">
            <img src="./imgs/ham.jpg" alt="" class="img">
          </div>
          <div class="main">
            <h6 class="h6">商家名</h6>
            <h6 class="h6">商家评分</h6>
            <h6 class="h6">￥20 起送 ￥5 配送费</h6>
          </div>
        </div>
        <div class="shoper">
          <div class="left">
            <img src="./imgs/ham.jpg" alt="" class="img">
          </div>
          <div class="main">
            <h6 class="h6">商家名</h6>
            <h6 class="h6">商家评分</h6>
            <h6 class="h6">￥20 起送 ￥5 配送费</h6>
          </div>
        </div>
      </div>
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/mixins.styl"
.list
   display flex
   flex-direction column
   .shoper
    display flex
    align-items center
    bottom-border-1px(#ccc)
    .left
     width 100px
     .img
       width 100px
       height 100px
    .main
     flex 1
     display flex
     flex-direction column
     justify-content space-around
</style>


