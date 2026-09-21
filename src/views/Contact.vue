<script setup>
import { ref } from 'vue'
import { useLanguage } from '@/composables/useLanguage'

const form = ref({ name: '', email: '', subject: '', message: '' })
const sent = ref(false)
const { t } = useLanguage()

const submit = () => {
  sent.value = true
  setTimeout(() => (sent.value = false), 4000)
  form.value = { name: '', email: '', subject: '', message: '' }
}
</script>

<template>
  <div>
    <section class="bg-khmer-navy text-white py-14">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl font-bold mb-2">{{ t('contactUs') }}</h1>
        <p class="text-khmer-gold uppercase tracking-widest text-sm">Plan your trip to the Kingdom of Wonder</p>
      </div>
    </section>

    <div class="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
      <div class="lg:col-span-2 bg-white shadow-lg rounded-lg p-8">
        <h2 class="text-2xl font-bold text-khmer-navy mb-6">{{ t('contactUs') }}</h2>

        <div v-if="sent" class="alert bg-green-100 text-green-800 border-green-300 mb-6">
          {{ t('messageReceived') }}
        </div>

        <form @submit.prevent="submit" class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input v-model="form.name" required :placeholder="t('fullName')" class="input input-bordered" />
          <input v-model="form.email" required type="email" :placeholder="t('emailAddress')" class="input input-bordered" />
          <input v-model="form.subject" required :placeholder="t('subject')" class="input input-bordered md:col-span-2" />
          <textarea v-model="form.message" required rows="5" :placeholder="t('messagePlaceholder')"
            class="textarea textarea-bordered md:col-span-2"></textarea>
          <button type="submit"
            class="md:col-span-2 px-8 py-3 bg-khmer-red text-white font-semibold uppercase text-sm tracking-wider rounded hover:bg-khmer-darkred transition-colors">
            {{ t('sendMessage') }}
          </button>
        </form>
      </div>

      <aside class="bg-white shadow-lg rounded-lg p-8 h-max">
        <h3 class="font-bold text-khmer-navy uppercase tracking-wider text-sm mb-4">{{ t('information') }}</h3>
        <div class="space-y-4 text-sm text-gray-700">
          <div>
            <p class="font-semibold text-khmer-red uppercase text-xs tracking-wider">Address</p>
            <p>Preah Norodom Blvd, Phnom Penh, Cambodia</p>
          </div>
          <div>
            <p class="font-semibold text-khmer-red uppercase text-xs tracking-wider">Email</p>
            <p>sambathkun01@gmail.com</p>
          </div>
          <div>
            <p class="font-semibold text-khmer-red uppercase text-xs tracking-wider">Phone</p>
            <p>+855 (0) 96 275 1803</p>
          </div>
          <div>
            <p class="font-semibold text-khmer-red uppercase text-xs tracking-wider">Office Hours</p>
            <p>Mon – Fri, 8:00 AM – 5:00 PM</p>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>
