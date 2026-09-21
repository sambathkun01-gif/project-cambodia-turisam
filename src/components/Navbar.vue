<script setup>
import { ref } from 'vue'
import { useLanguage } from '@/composables/useLanguage'

const darkMode = defineModel('darkMode', { type: Boolean, default: false })
const { language, t, toggleLanguage } = useLanguage()
const open = ref(false)
const links = [
  { to: '/', key: 'home' }, { to: '/destinations', key: 'destinations' }, { to: '/provinces', key: 'provinces' },
  { to: '/culture', key: 'culture' }, { to: '/food', key: 'cuisine' }, { to: '/about', key: 'about' }, { to: '/contact', key: 'contact' },
]
</script>

<template>
  <!-- Top gold strip -->
  <div class="bg-khmer-gold text-khmer-navy text-xs text-center py-1 font-semibold tracking-wide">
    KINGDOM OF CAMBODIA — MINISTRY STYLE TOURISM PORTAL
  </div>

  <nav class="bg-khmer-red text-white shadow-lg sticky top-0 z-50">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Brand -->
        <router-link to="/" class="flex items-center gap-3">
          <img src="../../public/images/flag/image.png" alt="Cambodia flag" class="h-8 w-auto" />
          <div class="leading-tight">
            <p class="font-bold text-lg tracking-wide">CAMBODIA TOURISM</p>
            <p class="text-khmer-gold text-[10px] tracking-widest uppercase">Kingdom of Wonder</p>
          </div>
        </router-link>

        <!-- Desktop menu -->
        <ul class="hidden lg:flex items-center gap-1">
          <li v-for="l in links" :key="l.to">
            <router-link :to="l.to"
              class="nav-link px-3 py-2 text-sm font-medium uppercase hover:text-khmer-gold transition-colors">
              {{ t(l.key) }}
            </router-link>
          </li>
          <li>
            <button
              type="button"
              class="ml-2 px-3 py-2 text-sm font-semibold rounded hover:bg-khmer-darkred transition-colors"
              :aria-label="language === 'KH' ? t('english') : t('khmer')"
              :title="language === 'KH' ? t('english') : t('khmer')"
              @click="toggleLanguage"
            >
              {{ language === 'KH' ? 'EN' : 'ខ្មែរ' }}
            </button>
          </li>
          <li>
            <router-link to="/favorites"
              class="ml-2 px-4 py-2 text-sm font-semibold uppercase bg-khmer-gold text-khmer-navy rounded hover:bg-yellow-500 transition-colors">
              My Favorites
            </router-link>
          </li>
          <li>
            <button
              type="button"
              class="ml-2 px-3 py-2 text-lg rounded hover:bg-khmer-darkred transition-colors"
              :aria-label="darkMode ? 'Switch to light mode' : 'Switch to dark mode'"
              :title="darkMode ? 'Switch to light mode' : 'Switch to dark mode'"
              @click="darkMode = !darkMode; localStorage.setItem('theme', darkMode ? 'dark' : 'light')"
            >
              {{ darkMode ? '☀️' : '🌙' }}
            </button>
          </li>
        </ul>

        <!-- Mobile toggle -->
        <button
          class="lg:hidden text-2xl"
          type="button"
          aria-label="Menu"
          aria-controls="mobile-menu"
          :aria-expanded="open"
          @click="open = !open"
        >
          {{ open ? '✕' : '☰' }}
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
  <ul v-if="open" id="mobile-menu" class="lg:hidden bg-khmer-darkred">
      <li v-for="l in links" :key="l.to">
        <router-link :to="l.to" @click="open = false"
          class="block px-6 py-3 uppercase text-sm border-b border-white/10 hover:bg-khmer-red">
          {{ t(l.key) }}
        </router-link>
      </li>
      <li>
        <button
          type="button"
          class="block w-full px-6 py-3 text-left uppercase text-sm border-b border-white/10 hover:bg-khmer-red"
          @click="toggleLanguage"
        >
          {{ language === 'KH' ? 'EN English' : 'ខ្មែរ Khmer' }}
        </button>
      </li>
      <li>
        <button
          type="button"
          class="block w-full px-6 py-3 text-left uppercase text-sm border-b border-white/10 hover:bg-khmer-red"
          @click="darkMode = !darkMode; localStorage.setItem('theme', darkMode ? 'dark' : 'light')"
        >
          {{ darkMode ? '☀️ Light Mode' : '🌙 Dark Mode' }}
        </button>
      </li>
    </ul>
  </nav>
</template>
