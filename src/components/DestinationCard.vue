<script setup>
import { useFavorites } from '../composables/useFavorites'
import { useLanguage } from '@/composables/useLanguage'

const props = defineProps({
  destination: { type: Object, required: true },
})

const { isFavorite, toggleFavorite } = useFavorites()
const { language, t } = useLanguage()
</script>

<template>
  <div class="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
    <div class="relative h-48 overflow-hidden">
      <img :src="destination.image" :alt="language === 'KH' ? destination.nameKh : destination.name"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <span class="absolute top-3 left-3 px-3 py-1 bg-khmer-gold text-khmer-navy text-xs font-semibold uppercase tracking-wider rounded">
        {{ language === 'KH' ? destination.categoryKh : destination.category }}
      </span>
      <button @click="toggleFavorite(destination.id)"
        class="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow hover:scale-110 transition-transform"
        :title="isFavorite(destination.id) ? t('saved') : t('addFavorite')">
        <span :class="isFavorite(destination.id) ? 'text-khmer-red' : 'text-gray-400'" class="text-lg">♥</span>
      </button>
    </div>
    <div class="p-5">
      <div class="flex items-center justify-between mb-1">
        <span class="text-xs text-gray-500">{{ language === 'KH' ? destination.provinceKh : destination.province }}</span>
        <span class="text-khmer-gold font-bold text-sm">★ {{ destination.rating }}</span>
      </div>
      <h3 class="text-xl font-bold text-khmer-navy mb-2">{{ language === 'KH' ? destination.nameKh : destination.name }}</h3>
      <p class="text-sm text-gray-600 mb-4 line-clamp-2">{{ language === 'KH' ? destination.descriptionKh : destination.description }}</p>
      <router-link :to="`/destinations/${destination.id}`"
        class="inline-block px-4 py-2 bg-khmer-red text-white text-sm font-semibold rounded hover:bg-khmer-navy transition-colors">
        {{ t('viewDetails') }} →
      </router-link>
    </div>
  </div>
</template>
