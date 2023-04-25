<template>
  <!-- <div id="app"> -->
  <router-view :key="$route.fullPath" />
  <!-- </div> -->
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>
