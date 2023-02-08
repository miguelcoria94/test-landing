<template>
  <div className="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <GthHeader />

    <!-- Page content -->
    <main class="grow">

      <GthHero />
      <!-- <Inspiration />
      <Carousel />
      <Creatives />
      <Pricing />
      <Testimonials />
      <Faqs />
      <Blog />
      <Cta /> -->

    </main>
    
    <!-- Site footer -->
    <Footer />    

  </div>
</template>

<script>
import GthHeader from '../partials/GthHeader.vue'
import GthHero from '../partials/GthHero.vue'
// import Inspiration from '../partials/Inspiration.vue'
// import Creatives from '../partials/Creatives.vue'
// import Pricing from '../partials/Pricing.vue'
// import Testimonials from '../partials/Testimonials.vue'
// import Faqs from '../partials/Faqs.vue'
// import Blog from '../partials/Blog.vue'
// import Cta from '../partials/Cta.vue'
// import Footer from '../partials/Footer.vue'

export default {
  name: 'Home',
  components: {
    GthHeader,
    GthHero,
  },
}
</script>