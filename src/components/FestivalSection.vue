<script setup>
import festivals from '@/data/festivals.json'
import FestivalCard from '@/components/FestivalCard.vue'
</script>

<template>
  <section class="container mx-auto px-4 py-12">
    <h2 class="text-3xl font-bold mb-6">🎉 Major Festivals</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <FestivalCard v-for="f in festivals" :key="f.id" :festival="f" />
    </div>
  </section>
</template>
