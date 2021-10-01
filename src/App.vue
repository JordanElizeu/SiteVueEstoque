<template>
  <v-app>
    <AppTopBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';
import AppTopBar from "./components/shared/AppTopBar";

export default {
  name: "App",
  components: {
    AppTopBar,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@1,100&display=swap");
</style>
