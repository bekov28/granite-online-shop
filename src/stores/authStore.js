import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { db, auth } from '@/utility/firebaseConfig'
import { doc, setDoc } from 'firebase/firestore'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import { ROLE_ADMIN, ROLE_USER } from '@/constants/appConstants'
import { useSwal } from '@/utility/useSwal'

export const useAuthStore = defineStore('authStore', () => {
  const user = ref(null)
  const error = ref(null)
  const isLoading = ref(false)
  const role = ref(null)
  const initialized = ref(false) //if authorization has been initialized
  const { showSuccess } = useSwal()

  const isAuthenticated = computed(() => user.value !== null)
  const isAdmin = computed(() => role.value === ROLE_ADMIN)

  const initializeAuth = async () => {
    console.log('initializeAuth')
    onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        user.value = firebaseUser
        initialized.value = true
      } else {
        clearUser()
      }
    })
  }

  const signUpUser = async (email, password) => {
    isLoading.value = true
    try {
      const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
      user.value = userCredentials.user //saving user object to user.value

      await setDoc(doc(db, 'users', userCredentials.user.uid), {
        //creating user collection
        email: userCredentials.user.email,
        role: ROLE_USER,
        createdAt: new Date(),
      })
      clearUser()
      error.value = null //if everything is valid
    } catch (err) {
      error.value = err.message
      throw err
    } finally {
      isLoading.value = false
    }
  }

  const clearUser = () => {
    user.role = null
    user.value = null
  }

  const signInUser = async (email, password) => {
    isLoading.value = true
    try {
      const userCredentials = await signInWithEmailAndPassword(auth, email, password)
      showSuccess('Successfully Signed In')
      user.value = userCredentials.user //saving user object to user.value
      user.role = ROLE_USER
      user.value = userCredentials.user
      error.value = null //if everything is valid
    } catch (err) {
      error.value = err.message
      throw err
    } finally {
      isLoading.value = false
    }
  }

  const signOutUser = async () => {
    isLoading.value = true
    try {
      await signOut(auth)
      showSuccess('Successfully Signed Out')
      clearUser()
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
    role,
    error,
    isLoading,

    //getters
    isAdmin,
    isAuthenticated,

    //actions
    signUpUser,
    signInUser,
    initializeAuth,
    signOutUser,
  }
})
