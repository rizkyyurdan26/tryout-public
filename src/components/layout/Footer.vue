<script setup lang="ts">
import { Icon } from "@iconify/vue";
import Logo from "../logo/Logo.vue"; // sesuaikan path

const paket = ["Universal", "UTBK", "Psikotes", "SNBT", "CPNS"];
</script>

<template>
  <footer class="bg-blue-900 text-white">
    <div class="mx-auto grid w-[90%] max-w-7xl grid-cols-1 gap-10 py-12 md:grid-cols-3">
      <div>
        <Logo class="mb-3" />
        <p class="text-sm leading-relaxed text-blue-100">
          Platform tryout online terpercaya untuk persiapan berbagai ujian di Indonesia.
        </p>
      </div>

      <div>
        <h3 class="mb-4 font-semibold">Paket Tryout</h3>
        <ul class="space-y-2 text-sm text-blue-100">
          <li v-for="p in paket" :key="p">
            <a href="#" class="hover:text-white">{{ p }}</a>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="mb-4 font-semibold">Bantuan</h3>
        <ul class="space-y-2 text-sm text-blue-100">
          <li class="flex items-center gap-2">
            <Icon icon="ri:chat-3-line" /> <a href="#" class="hover:text-white">Chat Admin</a>
          </li>
          <li class="flex items-center gap-2">
            <Icon icon="ri:mail-line" /> <a href="#" class="hover:text-white">Email</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-blue-800 py-4 text-center text-sm text-blue-200">
      © 2026 Bina Tryout. All rights reserved
    </div>
  </footer>
</template>