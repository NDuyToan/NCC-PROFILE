<template>
  <div class="main">
    <home></home>

  </div>
</template>

<script>
import Home from '@/components/Home.vue';
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
export default {
  name: 'MainComponent',
  data () {
    return {

    }
  },
  components: {
    Home,
    TheHeader,
    TheFooter
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
