<script setup>
import HeroSection from '@/components/sections/dashboard/HeroSection.vue';
import CategoryTabs from '@/components/sections/dashboard/CategoryTabs.vue';
import PopularSection from '@/components/sections/dashboard/PopularSection.vue';
import FeatureSection from '@/components/sections/dashboard/FeatureSection.vue';
import CtaSection from '@/components/sections/dashboard/CtaSection.vue';
</script>

<template>
  <div>
    <HeroSection />
    <CategoryTabs />
    <PopularSection />
    <FeatureSection />
    <CtaSection />
  </div>
</template>