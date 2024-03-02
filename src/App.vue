<template>

  <h1>Programación Web</h1>
  <NavBar />
  <router-view />

</template>

<script>
import  NavBar from "@/components/NavBar.vue";

import GenerarTokenPageVue from './pages/GenerarTokenPage.vue';

export default {
  name: "App",
  components: {
    GenerarTokenPageVue,
    NavBar
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: #C9D7F8;


}
</style>
