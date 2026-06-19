<script setup lang="ts">
import { Icon } from "@iconify/vue";

const model = defineModel();

defineEmits(["click"]);

defineProps({});
</script>

<template>
  <div class="flex items-center border border-border rounded-lg">
    <input type="text" v-model="model" class="focus:outline-none ml-3 w-64" />

    <button
      @click="$emit('click')"
      class="cursor-pointer bg-dark p-3 rounded-r-lg"
    >
      <Icon icon="ri:search-line" class="text-white" />
    </button>
  </div>
</template>
