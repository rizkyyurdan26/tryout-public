<script setup>
import { onMounted, ref } from "vue";
import { Icon } from "@iconify/vue";
import { useDashboard } from "@/composables/useDashboard";

const { categories, fetchCategories, fetchTryouts } = useDashboard();
const active = ref(null);

const iconMap = {
  universal: { icon: "ri:global-line",          color: "text-blue-500" },
  utbk:      { icon: "ri:bank-line",            color: "text-green-500" },
  mandiri:   { icon: "ri:graduation-cap-line",  color: "text-indigo-600" },
  cpns:      { icon: "ri:government-line",       color: "text-orange-500" },
  psikotes:  { icon: "ri:brain-line",           color: "text-pink-500" },
};

onMounted(fetchCategories);

const select = (value) => {
  active.value = value;
  fetchTryouts(value); // hasil masuk ke tryouts (kalau mau tampil di section grid)
};
</script>

<template>
  <section class="border-b border-gray-100 bg-white">
    <div class="mx-auto flex w-[90%] max-w-7xl flex-wrap justify-center gap-8 py-6 md:gap-16">
        <button
        v-for="c in categories"
        :key="c.value"
        class="flex flex-col items-center gap-2 text-sm font-medium"
        :class="active === c.value ? 'text-blue-600' : 'text-gray-600'"
        @click="select(c.value)"
        >
        <Icon
            :icon="(iconMap[c.value] || { icon: 'ri:apps-line' }).icon"
            :class="(iconMap[c.value] || { color: 'text-gray-400' }).color"
            class="h-7 w-7"
        />
        {{ c.label }}
        </button>
    </div>
  </section>
</template>