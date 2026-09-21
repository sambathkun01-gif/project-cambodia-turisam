<script setup>
import cultureData from '../data/culture.json'
import { useLanguage } from '@/composables/useLanguage'
const traditions = cultureData
const etiquette = [1, 2, 3]
const { language, t: translate } = useLanguage()

</script>

<template>
  <div>
    <section class="bg-khmer-navy text-white py-14">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl font-bold mb-2">{{ translate('cultureHeritage') }}</h1>
        <p class="text-khmer-gold uppercase tracking-widest text-sm">Apsara dance · Buddhism · Festivals · Handicrafts</p>
      </div>
    </section>

    <div class="container mx-auto px-4 py-12">
      <!-- Intro -->
      <div class="max-w-3xl mx-auto text-center mb-14">
        <p class="text-lg text-gray-600 leading-relaxed">
          {{ translate('cultureIntro') }}
        </p>
      </div>

      <!-- Traditions -->
      <div class="space-y-14 max-w-5xl mx-auto">
        <div v-for="(t, i) in traditions" :key="t.title"
          class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          :class="i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''">
          <img :src="t.image" :alt="t.title" class="rounded-lg shadow-xl w-full h-72 object-cover" />
          <div>
            <p class="text-khmer-gold text-sm mb-1">{{ t.khmer }}</p>
            <h2 class="text-2xl font-bold text-khmer-navy mb-3">{{ t.title }}</h2>
            <p class="text-gray-600 leading-relaxed">{{ language === 'KH' ? t.textKh : t.text }}</p>
          </div>
        </div>
      </div>

      <!-- Etiquette -->
      <section class="mt-16 bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
        <h2 class="text-2xl font-bold text-khmer-navy mb-2 text-center">{{ translate('etiquette') }}</h2>
        <div class="w-16 h-1 bg-khmer-gold mx-auto mb-8"></div>
        <ul class="space-y-4">
          <li v-for="(e, i) in etiquette" :key="i" class="flex items-start gap-4">
            <span class="shrink-0 w-8 h-8 rounded-full bg-khmer-red text-white flex items-center justify-center text-sm font-bold">{{ i + 1 }}</span>
            <span class="text-gray-700 pt-1">{{ translate('travelRespect') }}</span>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>
