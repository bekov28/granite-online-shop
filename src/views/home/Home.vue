<template>Home Page</template>

<script setup>
import { onMounted, ref } from 'vue'
import productService from '@/services/productService'

const products = ref([])
const loading = ref(false)

onMounted(() => {
  fetchProducts()
})

const fetchProducts = async () => {
  try {
    loading.value = true
    await new Promise((resolve) => setTimeout(resolve, 500))
    products.value = await productService.getProducts()
    console.log(products.value)
  } catch (error) {
    console.log('Error occured: ', error)
  } finally {
    loading.value = false
  }
}
</script>
