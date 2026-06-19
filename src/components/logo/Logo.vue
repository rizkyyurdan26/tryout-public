<template>
  <div >
    <router-link to="/" class="flex items-center gap-2">
      <div class="p-3 rounded-lg bg-dark">
        <Icon icon="si:book-line" width="24" class="text-white" />
      </div>
      <h1 class="text-2xl font-bold text-secondary">
        Bina<span class="text-dark">Tryout</span>
      </h1>
    </router-link>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>
