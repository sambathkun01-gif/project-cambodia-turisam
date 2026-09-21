<script setup>
import { ref, onMounted } from 'vue'
import destinations from '@/data/destinations.json'
import DestinationCard from '@/components/DestinationCard.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import { useLanguage } from '@/composables/useLanguage'


const loading = ref(true)
const popular = destinations.slice(0, 6)
const { t } = useLanguage()
onMounted(() => setTimeout(() => (loading.value = false), 400))
</script>

<template>
  <div>
    <!-- HERO -->
    <section class="relative h-[70vh] min-h-[450px]">
      <img src="/images/HERO/image.png"
        alt="Angkor Wat at sunrise" class="absolute inset-0 w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30"></div>

      <div class="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
        <p class="text-khmer-gold tracking-[0.4em] uppercase text mb-4">{{ t('welcome') }}</p>
        <h1 class="text-4xl md:text-6xl font-bold mb-4 max-w-3xl leading-tight">
          {{ t('discoverCambodia') }}
        </h1>
        <p class="text-white/85 max-w-2xl mb-8 text-lg">
          {{ t('discoverCopy') }}
        </p>
        <div class="flex gap-4">
          <router-link to="/destinations"
            class="px-8 py-3 bg-khmer-red text-white font-semibold uppercase text-sm tracking-wider rounded hover:bg-khmer-darkred transition-colors">
            {{ t('exploreDestinations') }}
          </router-link>
        </div>
      </div>
    </section>

    <!-- FEATURE STRIP
    <section class="bg-khmer-navy text-white">
      <div classcontainer mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center ">
        <div><p class="text-3xl font-bold text-khmer-gold">25</p><p class="text-xs uppercase tracking-wider text-white/70">Provinces</p></div>
        <div><p class="text-3xl font-bold text-khmer-gold">1,000+</p><p class="text-xs uppercase tracking-wider text-white/70">Ancient Temples</p></div>
        <div><p class="text-3xl font-bold text-khmer-gold">443km</p><p class="text-xs uppercase tracking-wider text-white/70">Coastline</p></div>
        <div><p class="text-3xl font-bold text-khmer-gold">1,700+</p><p class="text-xs uppercase tracking-wider text-white/70">Years of History</p></div>
      </div>
    </section> -->

    <!-- POPULAR DESTINATIONS -->
    <section class="container mx-auto px-4 py-14">
      <div class="text-center mb-10">
        <p class="text-khmer-red uppercase tracking-widest text-sm font-semibold mb-2">{{ t('mustVisit') }}</p>
        <h2 class="text-3xl md:text-4xl font-bold text-khmer-navy">{{ t('popularDestinations') }}</h2>
        <div class="w-20 h-1 bg-khmer-gold mx-auto mt-4"></div>
      </div>

      <LoadingSpinner v-if="loading" />
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <DestinationCard v-for="d in popular" :key="d.id" :destination="d" />
      </div>

      <div class="text-center mt-10">
        <router-link to="/destinations"
          class="inline-block px-8 py-3 border-2 border-khmer-red text-khmer-red font-semibold uppercase text-sm tracking-wider rounded hover:bg-khmer-red hover:text-white transition-colors">
          {{ t('viewAll') }}
        </router-link>
      </div>
    </section>

    <!-- CALL TO ACTION
    <section class="bg-khmer-red text-white">
      <div class="container mx-auto px-4 py-14 text-center">
        <h2 class="text-3xl font-bold mb-3">Start Planning Your Journey</h2>
        <p class="text-white/85 mb-8 max-w-xl mx-auto">
          Everything you need — visa info, best seasons, transport, and cultural etiquette.
        </p>
        <router-link to="/contact"
          class="px-8 py-3 bg-khmer-gold text-khmer-navy font-semibold uppercase text-sm tracking-wider rounded hover:bg-yellow-500">
          Contact Us
        </router-link>
      </div>
    </section -->

> 
    <!-- CULTURE PREVIEW -->
    <section class="bg-base-200">
      <div class="container mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <img src="/images/CULTUREPREVIEW/image.png"
          alt="Apsara dance" class="rounded-lg shadow-xl w-full object-cover h-80" />
        <div>
          <p class="text-khmer-red uppercase tracking-widest text-sm font-semibold mb-2">{{ t('livingHeritage') }}</p>
          <h2 class="text-3xl font-bold text-khmer-navy mb-4">{{ t('cultureTitle') }}</h2>
          <p class="text-gray-600 mb-6 leading-relaxed">{{ t('cultureIntro') }}</p>
          <router-link to="/culture"
            class="px-8 py-3 bg-khmer-navy text-white font-semibold uppercase text-sm tracking-wider rounded hover:bg-khmer-red transition-colors">
            {{ t('exploreCulture') }}
          </router-link>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-khmer-red text-white">
      <div class="container mx-auto px-4 py-14 text-center">
        <h2 class="text-3xl font-bold mb-3">{{ t('startPlanning') }}</h2>
        <p class="text-white/85 mb-8 max-w-xl mx-auto">{{ t('planningCopy') }}</p>
        <router-link to="/contact"
          class="px-8 py-3 bg-khmer-gold text-khmer-navy font-semibold uppercase text-sm tracking-wider rounded hover:bg-yellow-500">
          {{ t('contactUs') }}
        </router-link>
      </div>
    </section>
  </div>
</template>
