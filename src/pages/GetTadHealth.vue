<template>
  <div className="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <GthHeader />

    <!-- Page content -->
    <main class="grow">

      <GthHero />
      <GthCarousel />
      <Creatives />
      <GthPricing />
      <GthTestimonials />
      <!-- <Inspiration />
      
      <Creatives />
      
      <Testimonials />
      <Faqs />
      <Blog />
      <Cta /> -->

    </main>
    
    <!-- Site footer -->

  </div>
</template>

<script>
import GthHeader from '../partials/GthHeader.vue'
import GthHero from '../partials/GthHero.vue'
import GthCarousel from '../partials/GthCarousel.vue'
// import Inspiration from '../partials/Inspiration.vue'
import Creatives from '../partials/Creatives.vue'
import GthPricing from '../partials/GthPricing.vue'
import GthTestimonials from '../partials/GthTestimonials.vue'
// import Faqs from '../partials/Faqs.vue'
// import Blog from '../partials/Blog.vue'
// import Cta from '../partials/Cta.vue'
// import Footer from '../partials/Footer.vue'

export default {
  name: 'Home',
  components: {
    GthHeader,
    GthHero,
    GthCarousel,
    Creatives,
    GthPricing,
    GthTestimonials
  },
}
</script>