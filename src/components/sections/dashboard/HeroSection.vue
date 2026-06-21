<script setup>
import { Icon } from "@iconify/vue";

const checklist = ["Rangking", "Leaderboard", "Pembahasan", "Flexibility"];
</script>

<template>
  <section class="bg-gradient-to-br from-blue-800 to-blue-500">
    <div class="mx-auto grid w-[90%] max-w-7xl grid-cols-1 items-center gap-10 py-16 md:grid-cols-2">
      <!-- Kiri: teks -->
      <div class="text-white">
        <span class="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium">
          <Icon icon="ri:shield-check-line" class="h-4 w-4" />
          Platform Tryout Terbaik di Indonesia
        </span>

        <h1 class="mb-5 text-4xl font-bold leading-tight md:text-5xl">
          Latih Kemampuanmu,<br />
          <span class="text-yellow-400">Wujudkan Impianmu di Sini</span>
        </h1>

        <p class="mb-7 max-w-md leading-relaxed text-blue-100">
          Beragam paket soal tryout untuk latihan, persiapan ujian sekolah, UTBK,
          Olimpiade, CPNS, dan masih banyak lagi. Latihan fleksibel di mana saja
          dan kapan saja sesuai keinginanmu.
        </p>

        <div class="mb-6 flex flex-wrap gap-3">
          <button class="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 font-semibold text-blue-700 hover:bg-blue-50">
            Mulai Tryout Gratis
            <Icon icon="ri:arrow-right-line" class="h-4 w-4" />
          </button>
          <button class="inline-flex items-center gap-2 rounded-lg border border-white/40 px-5 py-2.5 font-semibold text-white hover:bg-white/10">
            <Icon icon="ri:play-circle-line" class="h-4 w-4" />
            Lihat Demo
          </button>
        </div>

        <div class="flex flex-wrap gap-4 text-sm text-blue-100">
          <span v-for="c in checklist" :key="c" class="flex items-center gap-1">
            <Icon icon="ri:check-line" class="h-4 w-4" />
            {{ c }}
          </span>
        </div>
      </div>

      <div>
        <img
          src="/hero.jpg"
          alt="Suasana kelas"
          class="w-full rounded-2xl object-cover shadow-lg"
        />
      </div>
    </div>
  </section>
</template>