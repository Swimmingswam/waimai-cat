<template>
  <div class="box">
    <headerTop title="订单"/>
    <div class="main">
        登陆后可查看外卖订单
        <button>立即登录</button>
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
</style>
