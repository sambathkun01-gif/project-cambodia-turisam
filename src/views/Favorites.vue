<script setup>
import { computed } from 'vue'
import destinations from '@/data/destinations.json'
import { useFavorites } from '@/composables/useFavorites'
import DestinationCard from '@/components/DestinationCard.vue'
import EmptyState from '@/components/EmptyState.vue'
import { useLanguage } from '@/composables/useLanguage'

const { favorites } = useFavorites()
const { t } = useLanguage()

const savedDestinations = computed(() =>
  destinations.filter(d => favorites.value.includes(d.id))
)
</script>

<template>
  <div>
    <section class="bg-khmer-navy text-white py-14">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl font-bold mb-2">{{ t('favorites') }}</h1>
        <p class="text-khmer-gold uppercase tracking-widest text-sm">{{ t('saveFavorites') }}</p>
      </div>
    </section>

    <div class="container mx-auto px-4 py-10">
      <EmptyState v-if="savedDestinations.length === 0" icon="—"
        :title="t('noFavorites')"
        :message="t('saveFavorites')" />

      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <DestinationCard v-for="d in savedDestinations" :key="d.id" :destination="d" />
      </div>
    </div>
  </div>
</template>
