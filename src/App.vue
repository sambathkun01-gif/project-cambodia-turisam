<template>
  <div class="min-h-screen flex flex-col" :class="{ 'dark-mode': darkMode }">
    <Navbar v-model:dark-mode="darkMode" />
    <main class="flex-1">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import { useLanguage } from '@/composables/useLanguage'

const darkMode = ref(localStorage.getItem('theme') === 'dark')
const { language } = useLanguage()
</script>
