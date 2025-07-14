<template>
  <div class="modal fade" tabindex="-1" :id="`productDetailModal-${product.id}`">
    <div class="modal-dialog modal modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-muted fs-5">Product Details</h5>
          <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button> -->
        </div>
        <div class="modal-body">
          <div class="row g-4">
            <div class="col-md-6">
              <div class="">
                <img
                  :src="product.image || `https://placehold.co/600x400`"
                  class="img-fluid rounded-3"
                  style="max-height: 400px"
                />
              </div>
            </div>

            <div class="col-md-6">
              <h2 class="text-success">{{ product.name }}</h2>
              <span class="badge text-bg-warning p-2" v-if="product.bestSeller">
                <i class="bi bi-star-fill"></i> Bestseller
              </span>
              <span class="badge text-bg-warning p-2 mx-2">
                <i class="bi bi-tag-fill px-1"></i>
                <span> {{ product.category }}</span>
              </span>
              <p class="text-muted">{{ product.description }}</p>

              <div class="h3">
                <span
                  class="text-success"
                  :style="{ textDecoration: product.salePrice ? 'line-through' : 'none' }"
                >
                  ${{ product.price.toFixed(0) }}
                  <span>/sqft</span>
                </span>
                <span class="text-danger" v-if="product.salePrice">
                  ${{ product.salePrice.toFixed(0) }}/sqft
                </span>
              </div>

              <div class="">
                <div class="d-flex align-items-center gap-2 mb-2"></div>
                <div class="d-flex flex-wrap gap-2">
                  <span
                    class="badge text-bg-secondary p-2"
                    v-for="(tag, index) in product.tags"
                    :key="index"
                    >{{ tag }}</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <a href="mailto: berdiyororzu@gmail.com" class="btn btn-success">Contact Us</a>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  product: Object,
})
</script>
