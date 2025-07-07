import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('themeStore', () => {
  const theme = ref('dark')

  const setTheme = (newTheme) => {
    theme.value = newTheme
    const bodyElement = document.body
    bodyElement.setAttribute('data-bs-theme', newTheme)
    console.log('New theme set: ', newTheme)
  }
  return {
    theme,
    setTheme,
  }
})
