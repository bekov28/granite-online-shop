<template>
  <div class="container py-4">
    <div class="border rounded pb-3 px-2">
      <div
        class="card-header d-flex flex-column flex-md-row justify-content-between align-items-md-center p-4"
      >
        <div>
          <h1 class="text-secondary">Products</h1>
          <p class="mb-0 text-muted small">Manage your product listings</p>
        </div>
        <a href="#" class="btn btn-success btn-sm gap-2 rounded-1 px-4 py-2">
          <i class="bi bi-plus-square"></i> &nbsp;
          <span>Add Product</span>
        </a>
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
              <tr>
                <td class="ps-3">
                  <div class="d-flex align-items-center">
                    <img
                      :src="`https://placehold.co/50x50`"
                      class="rounded object-fit-cover me-2"
                      style="width: 50px; height: 50px"
                    />
                    <div>
                      <div class="fw-semibold small">NAME</div>
                      <small
                        class="text-muted text-truncate d-inline-block"
                        style="max-width: 200px"
                      >
                        DESCRIPTION
                      </small>
                    </div>
                  </div>
                </td>
                <td>
                  <span class="badge bg-secondary bg-opacity-10 text-secondary small">
                    CATEGORY
                  </span>
                </td>
                <td>
                  <div class="d-flex flex-column">
                    <span class="fw-semibold small">PRICE</span>
                    <span class="text-danger small"> SALE PRICE </span>
                  </div>
                </td>
                <td>
                  <div class="d-flex flex-wrap gap-1">
                    <span class="badge bg-info bg-opacity-10 text-info small"> TAGS </span>
                  </div>
                </td>
                <td>
                  <span class="badge bg-warning bg-opacity-10 text-warning small">
                    Bestseller
                  </span>
                  <span class="text-muted text-center">---</span>
                </td>
                <td class="pe-3 text-end">
                  <button class="btn btn-sm btn-outline-secondary m-2">
                    <i class="bi bi-pencil-fill"></i> Edit
                  </button>

                  <button class="btn btn-sm btn-outline-danger">
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
import { onMounted } from 'vue'
import productService from '@/services/productService'

onMounted(() => {
  const products = productService.getProducts()
  console.log(products)
})
</script>
