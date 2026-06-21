<script setup>
import { Icon } from "@iconify/vue";

import { computed } from "vue";

const ratingValue = computed(() => {
  const r = Number(props.tryout.rating);
  return Number.isFinite(r) && r > 0 ? r : null; // null kalau kosong/0/invalid
});

const props = defineProps({
  tryout: { type: Object, required: true },
});

const labelMap = {
  universal: "Universal",
  utbk: "UTBK",
  mandiri: "PTN & PTS",
  cpns: "CPNS",
  psikotes: "Psikotes",
};

const rupiah = (n) => "Rp. " + Number(n || 0).toLocaleString("id-ID");
</script>

<template>
  <div class="overflow-hidden rounded-xl border border-gray-200 bg-white">
    <img
      :src="tryout.thumbnail || 'https://placehold.co/400x250?text=Tryout'"
      :alt="tryout.name"
      class="h-44 w-full object-cover"
    />

    <div class="p-4">
      <p class="mb-1 text-sm font-medium text-blue-600">
        {{ labelMap[tryout.type] || tryout.type }}
      </p>
      <h3 class="mb-2 text-lg font-bold text-gray-900">{{ tryout.name }}</h3>

      <div
        v-if="ratingValue !== null"
        class="mb-3 flex items-center gap-1 text-sm"
      >
        <Icon icon="ri:star-fill" class="h-4 w-4 text-yellow-400" />
        <span class="text-gray-700">{{ ratingValue.toFixed(1) }} Rating</span>
      </div>

      <div class="mb-4 flex items-center gap-4 text-sm text-gray-500">
        <span class="flex items-center gap-1">
          <Icon icon="ri:book-open-line" class="h-4 w-4" />
          {{ tryout.total_soal ?? 0 }} soal
        </span>
        <span class="flex items-center gap-1">
          <Icon icon="ri:time-line" class="h-4 w-4" />
          Unlimited
        </span>
      </div>

      <div class="flex items-center justify-between gap-2">
        <span class="font-bold text-gray-900">{{ rupiah(tryout.price_sale || tryout.price) }}</span>

        <div class="flex gap-2">
          <button
            class="flex items-center gap-1 rounded-lg border border-orange-300 px-3 py-1.5 text-sm font-medium text-orange-500 hover:bg-orange-50"
            @click="$emit('cart', tryout)"
          >
            <Icon icon="ri:shopping-cart-2-line" class="h-4 w-4" />
            Keranjang
          </button>
          <button
            class="flex items-center gap-1 rounded-lg border border-green-300 px-3 py-1.5 text-sm font-medium text-green-600 hover:bg-green-50"
            @click="$emit('buy', tryout)"
          >
            <Icon icon="ri:cash-line" class="h-4 w-4" />
            Beli
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

