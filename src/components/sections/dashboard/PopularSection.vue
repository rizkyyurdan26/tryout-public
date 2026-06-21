<script setup>
import { onMounted } from "vue";
import { useDashboard } from "@/composables/useDashboard";
import TryoutCard from "@/components/common/TryoutCard.vue";

const { tryouts, loading, fetchPopular } = useDashboard();

onMounted(fetchPopular);

const onCart = (t) => console.log("keranjang (butuh login):", t.kode_feature);
const onBuy = (t) => console.log("beli (butuh login):", t.kode_feature);
</script>

<template>
  <section class="mx-auto w-[90%] max-w-7xl py-12">
    <h2 class="mb-6 text-2xl font-bold text-gray-900">Tryout Terlaris</h2>

    <div v-if="loading" class="py-10 text-center text-gray-400">Memuat...</div>

    <div v-else-if="tryouts.length === 0" class="py-10 text-center text-gray-400">
      Belum ada tryout.
    </div>

    <div v-else class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <TryoutCard
        v-for="t in tryouts"
        :key="t.kode_feature"
        :tryout="t"
        @cart="onCart"
        @buy="onBuy"
      />
    </div>
  </section>
</template>