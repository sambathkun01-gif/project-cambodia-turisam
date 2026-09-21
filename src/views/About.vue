<script setup>
import { useLanguage } from '@/composables/useLanguage'

const { t } = useLanguage()
</script>

<template>
  <div>
    <section class="bg-khmer-navy text-white py-16">
      <div class="container mx-auto px-4 text-center">
        <p class="text-khmer-gold uppercase tracking-[0.3em] text-sm font-semibold mb-3">{{ t('aboutPortal') }}</p>
        <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ t('aboutTitle') }}</h1>
        <p class="max-w-2xl mx-auto text-white/80 leading-relaxed">{{ t('aboutCopy') }}</p>
      </div>
    </section>

    <section class="container mx-auto px-4 py-14">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <img
          src="/images/HERO/image.png"
          alt="Cambodian heritage landscape"
          class="w-full h-80 object-cover rounded-lg shadow-xl"
        />
        <div>
          <p class="text-khmer-red uppercase tracking-widest text-sm font-semibold mb-2">{{ t('ourPurpose') }}</p>
          <h2 class="text-3xl font-bold text-khmer-navy mb-4">{{ t('purposeTitle') }}</h2>
          <p class="text-gray-600 leading-relaxed mb-4">{{ t('purposeCopy1') }}</p>
          <p class="text-gray-600 leading-relaxed">{{ t('purposeCopy2') }}</p>
        </div>
      </div>
    </section>

    <section class="bg-base-200 py-14">
      <div class="container mx-auto px-4">
        <div class="text-center mb-10">
          <p class="text-khmer-red uppercase tracking-widest text-sm font-semibold mb-2">{{ t('exploreWithPurpose') }}</p>
          <h2 class="text-3xl font-bold text-khmer-navy">{{ t('whatFind') }}</h2>
          <div class="w-20 h-1 bg-khmer-gold mx-auto mt-4"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article class="bg-white rounded-lg p-6 shadow-sm">
            <div class="text-3xl mb-4" aria-hidden="true">🏛️</div>
            <h3 class="text-xl font-bold text-khmer-navy mb-2">{{ t('heritage') }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ t('heritageCopy') }}</p>
          </article>
          <article class="bg-white rounded-lg p-6 shadow-sm">
            <div class="text-3xl mb-4" aria-hidden="true">🌿</div>
            <h3 class="text-xl font-bold text-khmer-navy mb-2">{{ t('nature') }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ t('natureCopy') }}</p>
          </article>
          <article class="bg-white rounded-lg p-6 shadow-sm">
            <div class="text-3xl mb-4" aria-hidden="true">🍜</div>
            <h3 class="text-xl font-bold text-khmer-navy mb-2">{{ t('localLife') }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ t('localLifeCopy') }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-khmer-red text-white py-14">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-3">{{ t('startPlanning') }}</h2>
        <p class="text-white/85 max-w-xl mx-auto mb-7">{{ t('planningCopy') }}</p>
        <router-link
          to="/destinations"
          class="inline-block px-8 py-3 bg-khmer-gold text-khmer-navy font-semibold uppercase text-sm tracking-wider rounded hover:bg-yellow-500"
        >
          {{ t('exploreDestinations') }}
        </router-link>
      </div>
    </section>
  </div>
</template>
