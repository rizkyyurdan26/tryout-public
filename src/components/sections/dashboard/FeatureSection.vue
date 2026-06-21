<script setup lang="ts">
import { Icon } from "@iconify/vue";

const features = [
  { icon: "ri:checkbox-circle-line", color: "text-green-500",  text: "Sesuai Soal Real" },
  { icon: "ri:refresh-line",         color: "text-orange-500", text: "Update Soal Terkini" },
  { icon: "ri:trophy-line",          color: "text-blue-600",   text: "Leaderboard Real Time" },
  { icon: "ri:line-chart-line",      color: "text-pink-500",   text: "Meningkatkan Kemampuan Signifikan" },
];
</script>

<template>
<section class="mx-auto grid w-[90%] max-w-7xl grid-cols-1 items-center gap-10 pt-6 pb-12 md:grid-cols-2">
    <img
      src="/students.jpg"
      alt="Siswa belajar"
      class="w-full rounded-2xl object-cover"
    />

    <div>
      <p class="mb-2 font-semibold text-blue-600">| Bina Tryout</p>
      <h2 class="mb-4 text-3xl font-bold text-gray-900">Bukan Sekedar Kumpulan Soal</h2>
      <p class="mb-6 leading-relaxed text-gray-600">
        Soal disusun dari sumber terpercaya, diperbarui berdasarkan ujian terbaru,
        dan disusun berdasarkan pola soal yang muncul pada ujian sebenarnya,
        sehingga latihanmu lebih relevan dan terarah.
      </p>

      <ul class="space-y-3">
        <li v-for="f in features" :key="f.text" class="flex items-center gap-3">
          <Icon :icon="f.icon" :class="f.color" class="h-5 w-5 shrink-0" />
          <span class="text-gray-800">{{ f.text }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>