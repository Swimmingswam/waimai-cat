<template>
    <div class="box">
        <div class="top">
            <slot name="left"></slot>
            <span class="input">{{title}}</span>
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    title: String
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
  .icon
   font-size: 20px
  .input
   border: 0
   background: #02a774
</style>
