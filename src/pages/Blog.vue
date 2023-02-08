<template>
  <div class="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      
      <!-- Blog Header -->
      <BlogHero />
      

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from './../partials/Header.vue'
import Footer from './../partials/Footer.vue'
import BlogHero from './../partials/BlogHero.vue'

export default {
  name: 'Blog',
  components: {
    Header,
    Footer,
    BlogHero
  },
};
</script>
