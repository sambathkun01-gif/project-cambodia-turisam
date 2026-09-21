<script setup>
import { ref, computed } from 'vue'
import destinationsData from '@/data/destinations.json'
import DestinationCard from '@/components/DestinationCard.vue'
import EmptyState from '@/components/EmptyState.vue'
import { useLanguage } from '@/composables/useLanguage'

const search = ref('')
const category = ref('All')
const { t } = useLanguage()
const destinations = ref(destinationsData)
const categories = ['All', ...new Set(destinationsData.map(d => d.category))]

const filtered = computed(() =>
  destinations.value.filter(d =>
    (category.value === 'All' || d.category === category.value) &&
    (d.name.toLowerCase().includes(search.value.toLowerCase()) ||
     d.province.toLowerCase().includes(search.value.toLowerCase()))
  )
)
</script>

<template>
  <div>
    <section class="bg-khmer-navy text-white py-14">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl font-bold mb-2">{{ t('exploreDestinations') }}</h1>
        <p class="text-khmer-gold uppercase tracking-widest text-sm">Temples · Beaches · Nature · Cities</p>
      </div>
    </section>

    <div class="container mx-auto px-4 py-10">
      <!-- Filter bar -->
      <div class="bg-white shadow-md rounded-lg p-4 mb-8 flex flex-col md:flex-row gap-4 md:items-center">
        <input v-model="search" type="text" :placeholder="t('searchDestinations')"
          class="input input-bordered w-full md:flex-1" />
        <select v-model="category" class="select select-bordered w-full md:w-52">
          <option v-for="c in categories" :key="c" :value="c">{{ c }}</option>
        </select>
      </div>

      <EmptyState v-if="filtered.length === 0" icon="?" :title="t('noResults')"
        :message="t('tryDifferent')" />

      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <DestinationCard v-for="d in filtered" :key="d.id" :destination="d" />
      </div>
    </div>
  </div>
</template>
