<script setup>
defineProps({ food: { type: Object, required: true } })
</script>

<template>
  <div class="card bg-base-100 shadow-xl p-6">
<div class="text-6xl mb-2">{{ food.icon }}</div>
    <h2 class="card-title">{{ food.name }}</h2>
    <p class="text-sm text-base-content/70">{{ food.nameKh }}</p>
    <p class="text-sm mt-2">{{ food.description }}</p>
    <div class="mt-3">
      <span class="badge badge-sm" :class="food.spicy === 'Medium' ? 'badge-warning' : 'badge-ghost'">
        🌶️ {{ food.spicy }}
      </span>
    </div>
  </div>
</template>

