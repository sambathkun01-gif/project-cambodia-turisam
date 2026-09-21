<script setup>
import { useLanguage } from '@/composables/useLanguage'

defineProps({ festival: { type: Object, required: true } })
const { language } = useLanguage()
</script>

<template>
  <div class="card bg-base-100 shadow-xl p-6">
    <div class="text-5xl mb-2">{{ festival.icon }}</div>
    <span class="badge badge-secondary badge-sm w-fit">{{ festival.month }}</span>
    <h2 class="card-title mt-2">{{ festival.name }}</h2>
    <p class="text-sm text-base-content/70">{{ festival.nameKh }}</p>
    <p class="text-sm mt-2">{{ language === 'KH' ? festival.descriptionKh : festival.description }}</p>
  </div>
</template>
