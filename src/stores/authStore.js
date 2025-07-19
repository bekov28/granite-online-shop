import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { db, auth } from '@/utility/firebaseConfig'
import { doc, setDoc } from 'firebase/firestore'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export const useAuthStore = defineStore('authStore', () => {
  const user = ref(null)
  const error = ref(null)
  const isLoading = ref(false)

  const signUpUser = async (email, password) => {
    isLoading.value = true
    try {
      const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
      user.value = userCredentials.user //saving user object to user.value
      error.value = null //if everything is valid
    } catch (err) {
      error.value = err.message
      throw err
    } finally {
      isLoading.value = false
    }
  }

  return {
    //state
    user,
    error,
    isLoading,

    //actions
    signUpUser,
  }
})
