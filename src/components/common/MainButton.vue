<script setup>
defineEmits(["click"]);

defineProps({
  text: String,
  transparent: Boolean,
});
</script>
<template>
  <button @click="$emit('click')" :class="['px-5 py-1 cursor-pointer hover:scale-105 duration-300', transparent ? 'font-semibold text-main border border-main  rounded' : 'bg-main text-white font-semibold rounded']">
    {{ text }}
  </button>
</template>
