<template>
  <!-- Hero Section -->
  <section class="hero-section">
    <div class="container text-center">
      <h1 class="display-4 fw-bold text-white">Get In Touch</h1>
      <p class="lead text-white">We'd love to hear from you. Here's how you can reach us.</p>
    </div>
  </section>

  <!-- Contact Info Cards -->
  <section class="py-5">
    <div class="container">
      <div class="row g-4">
        <div class="col-md-4">
          <div class="card h-100 text-center contact-info-card">
            <div class="card-body">
              <i class="fas fa-map-marker-alt fa-3x text-primary mb-3"></i>
              <h5 class="card-title">Visit Us</h5>
              <p class="card-text">Simgokbon-dong<br />Bucheon,Gyongi-do</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100 text-center contact-info-card">
            <div class="card-body">
              <i class="fas fa-phone fa-3x text-primary mb-3"></i>
              <h5 class="card-title">Call Us</h5>
              <p class="card-text">+82 (10) 1234-5678<br />Monday-Friday: 9am-6pm</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100 text-center contact-info-card">
            <div class="card-body">
              <i class="fas fa-envelope fa-3x text-primary mb-3"></i>
              <h5 class="card-title">Email Us</h5>
              <p class="card-text">info@company.com<br />support@company.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ Section -->
  <section class="py-5">
    <div class="container">
      <h2 class="text-center mb-5">Frequently Asked Questions</h2>
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="accordion" id="faqAccordion">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq1"
                >
                  What is your response time?
                </button>
              </h2>
              <div
                id="faq1"
                class="accordion-collapse collapse show"
                data-bs-parent="#faqAccordion"
              >
                <div class="accordion-body">
                  We strive to respond to all inquiries within 24 hours during business days.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq2"
                >
                  How can I schedule a consultation?
                </button>
              </h2>
              <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  You can schedule a consultation by filling out our contact form or calling our
                  office directly.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq3"
                >
                  Do you offer virtual meetings?
                </button>
              </h2>
              <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  Yes, we offer virtual meetings via Zoom, Teams, or other platforms based on your
                  preference.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  background: linear-gradient(to right, #6a11cb, #2575fc);
  color: white;
  padding: 80px 0;
}
</style>
