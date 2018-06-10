<template>
  <div id="app">
    <router-view/>
    <footerGuide v-show="$route.meta.showfooter"/>
  </div>
</template>

<script>
import footerGuide from './components/footerGuide/footerGuide'
export default {
  name: 'App',
  components: {
    footerGuide: footerGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
</style>
