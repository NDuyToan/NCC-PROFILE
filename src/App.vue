<template>

  <div id="app">
    <div class="container">
    <the-header class="fixed-top"></the-header>
    <router-view/>
    <the-footer class="fixed-bottom"></the-footer>
    </div>

  </div>
</template>

<script>
import TheHeader from './components/TheHeader';
import TheFooter from './components/TheFooter';
export default {
  name: 'App',
  components:{
    TheHeader,
    TheFooter,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
