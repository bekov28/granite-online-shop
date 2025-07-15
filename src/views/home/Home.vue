<template>
  <div>
    <div
      class="bg-success w-100 position-relative overflow-hidden mb-4 py-5 d-flex align-items-center"
      style="
        background-image: url('');
        background-size: cover;
        background-position: center;
        min-height: 400px;
      "
    >
      <div class="position-absolute top-0 start-0 w-100 h-100 bg-success opacity-50"></div>

      <div class="container-fluid position-relative z-1">
        <div class="row justify-content-center text-center">
          <div class="col-lg-8 col-xl-7">
            <h1 class="display-4 fw-bold text-white mb-4">
              Your One-Stop Stone Shop
              <br class="d-none d-lg-block" />
              Premium Granite & Quartz for Every Style!
            </h1>
            <div class="input-group mt-3 mx-auto shadow-lg rounded-4" style="max-width: 700px">
              <input
                type="text"
                v-model="searchValue"
                class="form-control border-0 py-3 px-4 fs-5"
                placeholder="Search your favorite product..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="product-list" class="container">
      <h2 class="mb-5 text-center display-6">Discover Our Collection</h2>

      <div class="row g-3 mb-4 align-items-center">
        <div class="col-md-auto">
          <div class="d-flex flex-wrap gap-3">
            <button
              @click="selectedCategory = category"
              v-for="(category, index) in categoryList"
              :key="index"
              class="btn px-4 py-2"
              :class="{
                'btn-success text white': category === selectedCategory,
                'btn-outline-success': category !== selectedCategory,
              }"
            >
              {{ category }}
            </button>
          </div>
        </div>
        <div class="col-md-auto ms-md-auto">
          <div class="dropdown">
            <button
              class="btn btn-outline-secondary d-flex align-items-center gap-2 px-4 py-2"
              type="button"
              data-bs-toggle="dropdown"
            >
              <i class="bi bi-sort-down"></i>
              <span class="text-capitalize">SORT</span>
            </button>
            <ul class="dropdown-menu dropdown-menu-end shadow-sm">
              <li>
                <button class="dropdown-item py-2 d-flex align-items-center gap-2">
                  <i class="bi"></i>
                  <span class="text-capitalize"> SORT OPTIONS </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div v-if="filteredProductList.length > 0" class="row g-4 pb-4">
          <ProductCard
            v-for="product in filteredProductList"
            :key="product.id"
            :product="product"
          ></ProductCard>
        </div>
        <div v-else>
          <h3 class="text-center">No Products Found</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import productService from '@/services/productService'
import ProductCard from '@/components/Products/ProductCard.vue'
import { PRODUCT_CATEGORIES } from '@/constants/appConstants'

const products = ref([])
const loading = ref(false)
const searchValue = ref('')
const selectedCategory = ref('ALL')
const categoryList = ref(['ALL', ...PRODUCT_CATEGORIES])

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
//Filter products
const filteredProductList = computed(() => {
  let tempArray =
    selectedCategory.value === 'ALL'
      ? [...products.value]
      : products.value.filter(
          (item) => item.category.toUpperCase() === selectedCategory.value.toUpperCase(),
        )
  //Search products
  if (searchValue.value) {
    tempArray = tempArray.filter((item) => {
      return item.name.toUpperCase().includes(searchValue.value.toUpperCase())
    })
  }
  return tempArray
})
</script>
