<!-- LoadingSpinner.vue -->
<script setup>
import { useLanguage } from '@/composables/useLanguage'

const { t } = useLanguage()
</script>

<template>
  <div class="flex flex-col items-center justify-center py-16">
    <span class="loading loading-spinner loading-lg text-khmer-red"></span>
    <p class="mt-4 text-gray-500 text-sm uppercase tracking-wider">{{ t('loading') }}</p>
  </div>
</template>
