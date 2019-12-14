<!--
#----------------------------------------------------------------------------
# LSTM UI Vue.js Project
# By japoveda10
# App.vue
#----------------------------------------------------------------------------
-->

<!-- HTML -->
<template>
<div id="app">
  <Header />
    <router-view />
  </div>
</template>

<!-- JavaScript -->
<script>
import Header from "./components/layout/Header";

export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<!-- CSS -->
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #fff;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
