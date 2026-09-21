<script setup>
import { useLanguage } from '@/composables/useLanguage'

const { t } = useLanguage()
</script>

<template>
  <div class="flex flex-col items-center justify-center py-24 text-center">
    <p class="text-8xl mb-4">🛕</p>
    <h1 class="text-5xl font-bold mb-2">404</h1>
    <p class="text-xl opacity-60 mb-6">{{ t('notFoundCopy') }}</p>
    <router-link to="/" class="btn btn-primary">← {{ t('backHome') }}</router-link>
  </div>
</template>
