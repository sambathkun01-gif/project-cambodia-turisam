<!-- EmptyState.vue -->
<script setup>
defineProps({ icon: String, title: String, message: String })
</script>
<template>
  <div class="text-center py-16">
    <div class="text-5xl mb-4 text-gray-300">{{ icon }}</div>
    <h3 class="text-xl font-bold text-khmer-navy mb-2">{{ title }}</h3>
    <p class="text-gray-500">{{ message }}</p>
  </div>
</template>
