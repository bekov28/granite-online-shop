<template>
  <div class="container py-4">
    <div v-if="loading" class="d-flex justify-content-center align-items-center vh-100">
      <div class="spinner-grow text-secondary">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div class="border rounded pb-3 px-2" v-else>
      <div
        class="card-header d-flex flex-column flex-md-row justify-content-between align-items-md-center p-4"
      >
        <div>
          <h1 class="text-secondary">Products</h1>
          <p class="mb-0 text-muted small">Manage your product listings</p>
        </div>
        <router-link
          :to="{ name: APP_ROUTE_NAMES.PRODUCT_CREATE }"
          class="btn btn-success btn-sm gap-2 rounded-1 px-4 py-2"
        >
          <i class="bi bi-plus-square"></i> &nbsp;
          <span>Add Product</span>
        </router-link>
      </div>

      <div class="card-body p-3">
        <div class="table-responsive">
          <table class="table table-hover align-middle mb-0 table-striped">
            <thead>
              <tr>
                <th class="ps-3 small text-muted">Product</th>
                <th class="small text-muted">Category</th>
                <th class="small text-muted">Pricing</th>
                <th class="small text-muted">Tags</th>
                <th class="small text-muted">Bestseller</th>
                <th class="pe-3 text-end small text-muted">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product.id">
                <td class="ps-3">
                  <div class="d-flex align-items-center">
                    <img
                      :src="product.image || 'https://placehold.co/50x50'"
                      class="rounded object-fit-cover me-2"
                      style="width: 50px; height: 50px"
                    />
                    <div>
                      <div class="fw-semibold small">{{ product.name }}</div>
                      <small
                        class="text-muted text-truncate d-inline-block"
                        style="max-width: 200px"
                      >
                        {{ product.description }}
                      </small>
                    </div>
                  </div>
                </td>
                <td>
                  <span class="badge bg-secondary bg-opacity-10 text-secondary small">
                    {{ product.category }}
                  </span>
                </td>
                <td>
                  <div class="d-flex flex-column">
                    <span class="fw-semibold small">${{ product.price }}</span>
                    <span class="text-danger small"> ${{ product.salePrice }} </span>
                  </div>
                </td>
                <td>
                  <div class="d-flex flex-wrap gap-1">
                    <span
                      class="badge bg-info bg-opacity-10 text-info small"
                      v-for="tag in product.tags"
                      :key="tag"
                    >
                      {{ tag }}
                    </span>
                  </div>
                </td>
                <td>
                  <span
                    class="badge bg-warning bg-opacity-10 text-warning small"
                    v-if="product.isBestseller"
                  >
                    Bestseller
                  </span>
                  <span v-else class="text-muted text-center">---</span>
                </td>
                <td class="pe-3 text-end">
                  <button
                    class="btn btn-sm btn-outline-secondary m-2"
                    @click="
                      router.push({
                        name: APP_ROUTE_NAMES.PRODUCT_UPDATE,
                        params: { id: product.id },
                      })
                    "
                  >
                    <i class="bi bi-pencil-fill"></i> Edit
                  </button>

                  <button
                    class="btn btn-sm btn-outline-danger"
                    @click="handleProductDelete(product.id)"
                  >
                    <i class="bi bi-trash3-fill"></i> Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import productService from '@/services/productService'
import { useSwal } from '@/composibles/useSwal'
import { APP_ROUTE_NAMES } from '@/constants/routeNames'
import { useRouter } from 'vue-router'

const router = useRouter()
const { showSuccess, showError, showConfirm } = useSwal()
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
    console.log('Fetched products: ', products.value )
  } catch (error) {
    console.log('Error occured: ', error)
  } finally {
    loading.value = false
  }
}

const handleProductDelete = async (productId) => {
  try {
    loading.value = true
    const confirmResult = await showConfirm('Are you sure?')
    if (confirmResult.isConfirmed) {
      await productService.deleteProduct(productId)
      await showSuccess('Product deleted successfully')
      await fetchProducts()
    }
  } catch (error) {
    console.log('Delete failed', error)
  } finally {
    loading.value = false
  }
}
</script>
