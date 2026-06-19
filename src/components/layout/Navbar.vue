<script setup>
import MainButton from "../common/MainButton.vue";
import Navlink from "../common/Navlink.vue";
import SearchNav from "../common/SearchNav.vue";
import Logo from "../logo/Logo.vue";
</script>

<template>
  <!-- Header -->
  <header
    class="sticky top-0 z-50 bg-white flex h-[84px] w-full items-center justify-center border-b border-border"
  >
    <!-- Container -->
    <div class="flex gap-20 items-center justify-between max-w-[80%] w-full">
      <!-- Logo & Search -->
      <div class="flex items-center gap-10 max-w-[50%] w-full">
        <Logo />
        <SearchNav />
      </div>

      <!-- Navbar -->
      <div class="flex justify-between items-center max-w-[60%] w-full">
        <Navlink text="Home"  />
        <Navlink text="Paket Tryout" to="/paket" />
        <Navlink text="About" to="about"/>
        <div class="flex items-center gap-5">
          <MainButton text="Login" transparent />
          <MainButton text="Register" />
        </div>
      </div>
    </div>
  </header>
</template>
