import { ref, watch } from 'vue'

const favorites = ref(JSON.parse(localStorage.getItem('favorites') || '[]'))

watch(favorites, (val) => {
  localStorage.setItem('favorites', JSON.stringify(val))
}, { deep: true })

export function useFavorites() {
  const toggleFavorite = (id) => {
    const i = favorites.value.indexOf(id)
    i === -1 ? favorites.value.push(id) : favorites.value.splice(i, 1)
  }
  const isFavorite = (id) => favorites.value.includes(id)
  return { favorites, toggleFavorite, isFavorite }
}
