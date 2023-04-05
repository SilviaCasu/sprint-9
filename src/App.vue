<template>
  <div id="app">

    <body>
      <div class="container fluid justify-content-center "></div>
      <router-view />
    </body>
  </div>
</template>

<script>

export default {
  name: "App",

  data() {
    return {
      
    }
  },

}


</script>


<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
