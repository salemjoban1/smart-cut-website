<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <navBar/>
    <div id="about-us">
        <sectionsHeader/>
        <aboutUs/>
    </div>
  </div>
  <!-- <router-view /> -->
</template>
<script>
import  navBar  from '@/components/global/navBar.vue';
import sectionsHeader from'@/components/global/sectionsHeader.vue';
import aboutUs from'@/components/global/aboutUs.vue'

export default({
  name:"nav",
  components:{
    navBar,
    sectionsHeader,
    aboutUs
  }
});
</script>

<style lang="scss">
@import 'scss/main.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 1900px;
}

#nav {
  // padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  
}
#about-us{
    background-color:#fff;
    max-height: calc(100vh - $navHight);
  }
</style>
