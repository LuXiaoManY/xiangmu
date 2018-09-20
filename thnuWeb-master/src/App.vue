<template>
  <div id="app">
    <NavMenu/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
//绝对路径
import NavMenu from "@/components/NavMenu.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  components: {
    NavMenu,
    Footer
  }
};
</script>

<style>
</style>
