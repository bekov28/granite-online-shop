<template>
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card h-100 border">
      <div class="position-relative">
        <img
          :src="`https://placehold.co/600x400`"
          class="card-img-top object-fit-cover"
          style="height: 200px"
        />
        <div
          class="position-absolute top-0 start-0 m-2 px-2 py-1 bg-success text-white rounded-pill text-sm"
        >
          <i class="bi bi-star-fill me-1"></i>
          Bestseller
        </div>
      </div>
      <div class="card-body d-flex flex-column">
        <h5 class="card-title mb-2">NAME</h5>
        <p class="card-text text-truncate-lines-2 mb-3">DESCRIPTION</p>
        <div class="d-flex justify-content-between align-items-center mb-3">
          <div class="fw-bold me-2 fs-5 text-muted">
            <span>
              <span class="text-decoration-line-through"> $$ /sqft </span>
              <span class="text-danger px-1"> SALE</span>
            </span>
            <span> $$ /sqft </span>
          </div>
          <button class="btn btn-success fs-6 py-2 px-4 btn-sm" data-bs-toggle="modal">
            <i class="bi bi-card-list"></i> View Details
          </button>
        </div>
        <div class="d-flex flex-wrap gap-2">
          <span class="badge bg-secondary p-2">Category</span>
          <span class="badge bg-secondary p-2"> TAG </span>
        </div>
      </div>
    </div>
  </div>
</template>
