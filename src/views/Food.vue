<script setup>
import foodsData from '../data/foods.json'
import { useLanguage } from '@/composables/useLanguage'
const dishes = foodsData.dishes
const drinks = foodsData.drinks
const { language, t } = useLanguage()

</script>

<template>
  <div>
    <section class="bg-khmer-navy text-white py-14">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl font-bold mb-2">{{ t('cuisineLink') }}</h1>
        <p class="text-khmer-gold uppercase tracking-widest text-sm">Fish Amok · Kuy Teav · Street Food · Drinks</p>
      </div>
    </section>

    <div class="container mx-auto px-4 py-12">
      <div class="max-w-3xl mx-auto text-center mb-14">
        <p class="text-lg text-gray-600 leading-relaxed">
          {{ t('foodIntro') }}
        </p>
      </div>

      <!-- Dishes -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div v-for="d in dishes" :key="d.name"
          class="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
          <div class="relative h-48 overflow-hidden">
            <img :src="d.image" :alt="d.name"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <span class="absolute top-3 left-3 px-3 py-1 bg-khmer-gold text-khmer-navy text-xs font-semibold uppercase tracking-wider rounded">
              {{ language === 'KH' ? d.spicyKh : d.spicy }}
            </span>
          </div>
          <div class="p-5">
            <p class="text-khmer-gold text-sm mb-1">{{ d.khmer }}</p>
            <h3 class="text-xl font-bold text-khmer-navy mb-2">{{ d.name }}</h3>
            <p class="text-sm text-gray-600">{{ language === 'KH' ? d.descKh : d.desc }}</p>
          </div>
        </div>
      </div>

      <!-- Drinks -->
      <section class="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h2 class="text-2xl font-bold text-khmer-navy mb-2 text-center">{{ t('drinks') }}</h2>
        <div class="w-16 h-1 bg-khmer-gold mx-auto mb-8"></div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="dr in drinks" :key="dr.name" class="border-l-4 border-khmer-red pl-4">
            <h3 class="font-bold text-khmer-navy">
              {{ dr.name }} <span class="text-khmer-gold font-normal text-sm">({{ dr.khmer }})</span>
            </h3>
            <p class="text-sm text-gray-600 mt-1">{{ language === 'KH' ? dr.descKh : dr.desc }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
