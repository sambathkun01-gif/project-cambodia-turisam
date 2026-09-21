<script setup>
import { ref, computed } from 'vue'
import DestinationCard from '@/components/DestinationCard.vue'
import EmptyState from '@/components/EmptyState.vue'
import { useLanguage } from '@/composables/useLanguage'

import provincesData from '../data/provinces.json'
const provinces = provincesData
const search = ref('')
const { t } = useLanguage()
const { language } = useLanguage()
const filtered = computed(() =>
  provinces.filter(p =>
    p.name.toLowerCase().includes(search.value.toLowerCase()) ||
    p.nameKh.includes(search.value)
  )
)

</script>

<template>
  <div>
    <section class="bg-khmer-navy text-white py-14">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl font-bold mb-2">{{ t('provincesTitle') }}</h1>
        <p class="text-khmer-gold uppercase tracking-widest text-sm">25 {{ t('provinces') }} · {{ t('kingdomOfWonder') }}</p>
      </div>
    </section>

    <div class="container mx-auto px-4 py-10">
      <input v-model="search" type="text" :placeholder="t('searchProvinces')"
        class="input input-bordered w-full max-w-md mb-8" />

      <EmptyState v-if="filtered.length === 0" icon="?" :title="t('noProvinces')"
        :message="t('tryProvince')" />

      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="p in filtered" :key="p.name"
          class="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
          <div class="relative h-48 overflow-hidden">
            <img :src="p.image" :alt="language === 'KH' ? p.nameKh : p.name"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <span class="absolute top-3 left-3 px-3 py-1 bg-khmer-red text-white text-xs font-semibold uppercase tracking-wider rounded">
              {{ p.destinations }} {{ t('destinations') }}
            </span>
          </div>
          <div class="p-5">
            <p class="text-khmer-gold text-sm mb-1">{{ p.nameKh }}</p>
            <h3 class="text-xl font-bold text-khmer-navy mb-2">{{ language === 'KH' ? p.nameKh : p.name }}</h3>
            <p class="text-sm text-gray-600 mb-4">{{ language === 'KH' ? p.descriptionKh : p.description }}</p>
            <router-link to="/destinations"
              class="inline-block text-khmer-red text-sm font-semibold uppercase tracking-wider hover:text-khmer-gold transition-colors">
              {{ t('viewAll') }} →
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
