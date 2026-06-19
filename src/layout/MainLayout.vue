<script setup lang="ts">
import Navbar from "../components/layout/Navbar.vue";
</script>

<template>
  <div class="flex flex-col flex-1 w-full">
    <navbar />
    <main class="relative flex-1 overflow-y-auto">
      <router-view></router-view>
    </main>
  </div>
  <footer></footer>
</template>
