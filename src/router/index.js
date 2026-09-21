import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: () => import('@/views/Home.vue') },
  { path: '/destinations', name: 'Destinations', component: () => import('@/views/Destinations.vue') },
  { path: '/destinations/:id', name: 'DestinationDetail', component: () => import('@/views/DestinationDetail.vue') },
  { path: '/favorites', name: 'Favorites', component: () => import('@/views/Favorites.vue') },
  { path: '/provinces', name: 'Provinces', component: () => import('@/views/Provinces.vue') },
  { path: '/culture', name: 'Culture', component: () => import('@/views/Culture.vue') },
  { path: '/food', name: 'Food', component: () => import('@/views/Food.vue') },
  { path: '/about', name: 'About', component: () => import('@/views/About.vue') },
  { path: '/contact', name: 'Contact', component: () => import('@/views/Contact.vue') },
]

export default createRouter({ history: createWebHistory(), routes })
