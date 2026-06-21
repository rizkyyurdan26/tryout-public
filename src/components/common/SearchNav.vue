<script setup lang="ts">
import { Icon } from "@iconify/vue";

const model = defineModel<string>();
const emit = defineEmits(["search"]);

const onSearch = () => emit("search", model.value);
</script>

<template>
  <div class="flex w-full items-center overflow-hidden rounded-lg border border-border bg-white">
    <input
      v-model="model"
      type="text"
      placeholder="Cari tryout..."
      class="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm outline-none"
      @keyup.enter="onSearch"
    />
   <button
      type="button"
      class="flex h-10 w-11 shrink-0 items-center justify-center bg-blue-600 text-white"
      aria-label="Cari"
      @click="onSearch"
    >
      <Icon icon="ri:search-line" class="text-white h-4 w-4" />
    </button>
  </div>
</template>