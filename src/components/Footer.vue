<script setup>
import { useLanguage } from '@/composables/useLanguage'

const { t } = useLanguage()
</script>

<template>
  <footer class="bg-khmer-navy text-white mt-auto">
    <!-- Main footer -->
    <div class="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
      <div>
        <div class="flex items-center gap-3 mb-4">
          <img src="/flag/cambodia.svg" alt="Cambodia flag" class="h-8 w-auto" />
          <p class="font-bold text-lg tracking-wide">CAMBODIA TOURISM</p>
        </div>
        <p class="text-white/70 text-sm leading-relaxed">
          {{ t('footerCopy') }}
        </p>
      </div>

      <div>
        <h4 class="text-khmer-gold font-bold uppercase tracking-wider mb-4 text-sm">{{ t('quickLinks') }}</h4>
        <ul class="space-y-2 text-sm">
          <li><router-link to="/destinations" class="text-white/70 hover:text-khmer-gold">{{ t('destinations') }}</router-link></li>
          <li><router-link to="/provinces" class="text-white/70 hover:text-khmer-gold">{{ t('provinces') }}</router-link></li>
          <li><router-link to="/culture" class="text-white/70 hover:text-khmer-gold">{{ t('cultureHeritage') }}</router-link></li>
          <li><router-link to="/food" class="text-white/70 hover:text-khmer-gold">{{ t('cuisineLink') }}</router-link></li>
        </ul>
      </div>

      <div>
        <h4 class="text-khmer-gold font-bold uppercase tracking-wider mb-4 text-sm">{{ t('contactHeading') }}</h4>
        <ul class="space-y-2 text-sm text-white/70">
          <li>{{ t('office') }}</li>
          <li>sambathkun01@gmail.com</li>
          <li>+855 (0) 96 275 1803</li>
        </ul>
        <router-link to="/contact"
          class="inline-block mt-4 px-5 py-2 bg-khmer-red text-white text-sm font-semibold uppercase rounded hover:bg-khmer-darkred">
          {{ t('planTrip') }}
        </router-link>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-white/10">
      <p class="container mx-auto px-4 py-4 text-center text-xs text-white/50">
        © 2025 Cambodia Tourism — Educational project. Inspired by official tourism portals.
      </p>
    </div>
  </footer>
</template>
