<template>
  <div id="app">
    <!-- Your app content here -->
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import HelloWorld from "./components/HelloWorld.vue";
// import store from "./store";
// import router from "./router";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
  // setup() {
  //   return {
  //     store,
  //     router,
  //   };
  // },
});
</script>
