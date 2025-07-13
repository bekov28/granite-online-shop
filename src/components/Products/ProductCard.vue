<template>
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card h-100 border">
      <div class="position-relative">
        <img
          :src="product.image || `https://placehold.co/600x400`"
          class="card-img-top object-fit-cover"
          style="height: 200px"
        />
        <div
          v-if="product.bestseller"
          class="position-absolute top-0 start-0 m-2 px-2 py-1 bg-success text-white rounded-pill text-sm"
        >
          <i class="bi bi-star-fill me-1"></i>
          Bestseller
        </div>
      </div>
      <div class="card-body d-flex flex-column">
        <h5 class="card-title mb-2">{{ product.name }}</h5>
        <p class="card-text text-truncate-lines-2 mb-3">{{ product.description }}</p>
        <div class="d-flex justify-content-between align-items-center mb-3">
          <div class="fw-bold me-2 fs-5 text-muted">
            <span
              class="text-success"
              :style="{ textDecoration: product.salePrice ? 'line-through' : 'none' }"
            >
              ${{ product.price }} /USD
            </span>
            <span v-if="product.salePrice" class="px-2 text-danger"> SALE! </span>
          </div>
          <button
            class="btn btn-success fs-6 py-2 px-4 btn-sm"
            data-bs-toggle="modal"
            :data-bs-target="`#productDetailModal-${product.id}`"
          >
            <i class="bi bi-card-list"></i> View Details
          </button>
        </div>
        <div class="d-flex flex-wrap gap-2">
          <span class="badge bg-secondary p-2">{{ product.category }}</span>
          <span class="badge bg-secondary p-2" v-for="(tag, index) in product.tags" :key="index">
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
    <ProductDetail :product="product" />
  </div>
</template>

<script setup>
import ProductDetail from './ProductDetail.vue'

const props = defineProps({
  product: Object,
})
</script>
