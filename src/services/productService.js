import { TrackOpTypes } from 'vue'
import { db } from '../utility/firebaseConfig'
import { collection, addDoc, getDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore'

const productCollection = collection(db, 'products')

export default {
  async createProduct(productData) {
    //post method
    const docRef = await addDoc(productCollection, productData)
    return { id: docRef.id, ...productData }
  },

  async getProducts() {
    //getAll method
    const snaphost = await getDocs(productCollection)
    return snaphost.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  },

  async getProductById(id) {
    //get method
    const docRef = doc(db, 'products', id)
    const snaphost = await getDoc(docRef)
    return { id: snaphost.id, ...snaphost.data() }
  },

  async updateProduct(id, productData) {
    //get method
    const docRef = doc(db, 'products', id)
    await updateDoc(docRef, productData)
    return { id, ...productData }
  },

  async deleteProduct(id) {
    try {
      const docRef = doc(db, 'products', id)
      console.log(id)
      await deleteDoc(docRef)
    } catch (error) {
      console.log('Error deleting product: ', error)
    }
  },
}
