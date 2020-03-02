<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item ">
        <router-link class="nav-link" to="/">HOME</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/about-us">ABOUT US</router-link>
      </li>
       <li class="nav-item">
         <router-link class="nav-link" to="/our-strategy">OUR STRATEGY</router-link>
      </li>
      <li class="nav-item">
         <router-link class="nav-link" to="/services">SERVICES</router-link>
      </li>
      <li class="nav-item">
         <router-link class="nav-link" to="/services">WORK EXPERIENCE</router-link>
      </li>
      <li class="nav-item">
         <router-link class="nav-link" to="/services">COMPANY CULTURE</router-link>
      </li>
      <li class="nav-item">
         <router-link class="nav-link" to="/services"> OUR TECHNOLOGY</router-link>
      </li>
       <li class="nav-item">
         <router-link class="nav-link" to="/services">OUR CLIENT</router-link>
      </li>
       <li class="nav-item">
         <router-link class="nav-link" to="/services">CONTACT US</router-link>
      </li>

    </ul>
  </div>
</nav>
</template>

<script>
  export default {
    name: 'the-header',
    data() {
      return {
        noiDung: 'Đây là Header'
      }
    },

  }
</script>

<style >
ul li{
  font-size: 12px;
  
}

</style>
