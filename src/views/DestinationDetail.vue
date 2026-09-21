<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import destinations from '@/data/destinations.json'
import { useFavorites } from '@/composables/useFavorites'
import { useLanguage } from '@/composables/useLanguage'

const route = useRoute()
const { toggleFavorite, isFavorite } = useFavorites()
const { language, t } = useLanguage()

const destination = computed(() =>
  destinations.find(d => d.id === Number(route.params.id))
)
const related = computed(() =>
  destinations.filter(d => d.province === destination.value?.province && d.id !== destination.value?.id).slice(0, 3)
)
</script>

<template>
  <div v-if="destination">
    <section class="relative h-[50vh] min-h-[350px]">
      <img :src="destination.image" :alt="destination.name" class="absolute inset-0 w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20"></div>
      <div class="relative container mx-auto px-4 h-full flex flex-col justify-end pb-10 text-white">
        <span class="px-3 py-1 bg-khmer-red text-xs font-semibold uppercase tracking-wider rounded w-max mb-3">
          {{ destination.category }}
        </span>
        <h1 class="text-4xl md:text-5xl font-bold">{{ language === 'KH' ? destination.nameKh : destination.name }}</h1>
        <p class="text-khmer-gold uppercase tracking-widest text-sm mt-2">{{ language === 'KH' ? destination.provinceKh : destination.province }} Province</p>
      </div>
    </section>

    <div class="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
      <div class="lg:col-span-2">
        <h2 class="text-2xl font-bold text-khmer-navy mb-4">{{ t('aboutDestination') }}</h2>
        <p class="text-gray-700 leading-relaxed mb-6">{{ language === 'KH' ? destination.descriptionKh : destination.description }}</p>
      </div>

      <aside class="bg-base-200 rounded-lg p-6 h-max">
        <h3 class="font-bold text-khmer-navy mb-4 uppercase tracking-wider text-sm">{{ t('quickInfo') }}</h3>
        <div class="space-y-3 text-sm">
          <div class="flex justify-between border-b border-gray-300 pb-2">
            <span class="text-gray-500">{{ t('location') }}</span><span class="font-semibold">{{ destination.province }}</span>
          </div>
          <div class="flex justify-between border-b border-gray-300 pb-2">
            <span class="text-gray-500">{{ t('category') }}</span><span class="font-semibold">{{ destination.category }}</span>
          </div>
        </div>
        <button @click="toggleFavorite(destination.id)"
          class="btn w-full mt-6"
          :class="isFavorite(destination.id) ? 'bg-khmer-gold text-khmer-navy' : 'bg-khmer-red text-white hover:bg-khmer-darkred'">
          {{ isFavorite(destination.id) ? t('saved') : t('addFavorite') }}
        </button>
        <router-link to="/contact" class="block text-center mt-3 px-4 py-2 border-2 border-khmer-navy text-khmer-navy text-sm font-semibold uppercase rounded hover:bg-khmer-navy hover:text-white">
          {{ t('planVisit') }}
        </router-link>
      </aside>
    </div>

    <section v-if="related.length" class="bg-base-200 py-12">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl font-bold text-khmer-navy mb-6">{{ t('nearby') }} {{ destination.province }}</h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <DestinationCard v-for="d in related" :key="d.id" :destination="d" />
        </div>
      </div>
    </section>
  </div>

  <div v-else class="container mx-auto px-4 py-20 text-center">
    <h1 class="text-3xl font-bold text-khmer-navy mb-4">{{ t('destinationNotFound') }}</h1>
    <router-link to="/destinations" class="text-khmer-red font-semibold underline">{{ t('backDestinations') }}</router-link>
  </div>
</template>
