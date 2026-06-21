<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <section class="bg-gray-100 py-16">
    <div class="mx-auto w-[90%] max-w-3xl text-center">
      <h2 class="mb-4 text-3xl font-bold text-gray-900">Siap Menghadapi Ujianmu?</h2>
      <p class="mb-8 leading-relaxed text-gray-600">
        Berlatih bersama kami yang tersedia selama 24 jam
        untuk membantu mempersiapkan ujianmu dengan luar biasa
      </p>
      <button
        class="inline-flex items-center gap-2 rounded-lg bg-orange-400 px-6 py-3 font-semibold text-white hover:bg-orange-500"
      >
        Mulai Sekarang
        <Icon icon="ri:arrow-right-line" class="h-5 w-5" />
      </button>
    </div>
  </section>
</template>