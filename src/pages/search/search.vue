<template>
  <div class="box">
    <headerTop title="搜索"/>
    <div class="main">
      <input type="text" placeholder="请输入商家或美食名称">
      <button>搜索</button>
    </div>
  </div>
</template>

<script>
import headerTop from '../../components/headerTop/headerTop.vue'
export default {
  data: function () {
    return {
      data: 111
    }
  },
  components: {
    headerTop: headerTop
  }
}
</script>

<style lang="stylus" scoped>
 .box
  .top
   position: fixed
   top: 0
   display: flex
   justify-content: space-around
   align-items: center
   padding: 10px 0
   width: 100%
   background: #02a774
   color: #fff
  .main
   margin-top:100px
</style>
