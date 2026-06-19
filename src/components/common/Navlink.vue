<script setup>
defineProps({
  to: {
    type: [String, Object],
    default: "",
  },
  text: String,
});
</script>

<template>
  <router-link
    :to="to"
    class="font-semibold hover:text-dark hover:scale-105 duration-300 text-secondary"
    exact-active-class="!text-dark"
  >
    {{ text }}
  </router-link>
</template>
