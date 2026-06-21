<script setup>
import { ref } from "vue";
import MainButton from "../common/MainButton.vue";
import Navlink from "../common/Navlink.vue";
import SearchNav from "../common/SearchNav.vue";
import Logo from "../logo/Logo.vue";

const isOpen = ref(false);
</script>

<template>
  <header class="sticky top-0 z-50 bg-white border-b border-border">
    <div
      class="mx-auto flex h-[84px] w-[90%] max-w-7xl items-center justify-between gap-6"
    >
    <div class="flex flex-1 items-center gap-6">
      <Logo />
      <div class="hidden flex-1 min-w-0 lg:block">
        <SearchNav />
      </div>
    </div>

      <div class="hidden items-center gap-8 lg:flex">
        <Navlink text="Home" />
        <Navlink text="Paket Tryout" to="/paket" />
        <Navlink text="About" to="about" />
        <div class="flex items-center gap-3">
          <MainButton text="Login" transparent />
          <MainButton text="Register" />
        </div>
      </div>

      <button
        class="flex items-center justify-center p-2 lg:hidden"
        aria-label="Menu"
        @click="isOpen = !isOpen"
      >
        <svg
          v-if="!isOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <div
      v-show="isOpen"
      class="border-t border-border bg-white px-[5%] py-4 lg:hidden"
    >
      <div class="mb-4">
        <SearchNav />
      </div>

      <nav class="flex flex-col gap-3" @click="isOpen = false">
        <Navlink text="Home" />
        <Navlink text="Paket Tryout" to="/paket" />
        <Navlink text="About" to="about" />
      </nav>

      <div class="mt-4 flex flex-col gap-3" @click="isOpen = false">
        <MainButton text="Login" transparent />
        <MainButton text="Register" />
      </div>
    </div>
  </header>
</template>