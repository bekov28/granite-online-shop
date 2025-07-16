<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-md-6 col-lg-4 border">
        <div class="shadow-sm">
          <div class="card-body p-4">
            <h4 class="text-center mb-4">Sign In</h4>
            <form>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" required />
              </div>
              <div class="mb-4">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" required />
              </div>
              <button type="submit" class="btn btn-success w-100">
                <span class="spinner-border spinner-border-sm me-2"></span>
                Sign In
              </button>
              <div class="alert alert-danger mt-3 mb-0">ERROR LIST</div>
            </form>
            <p class="mt-3 form-label text-center">
              Don't have an account?
              <a href="#">Register here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
