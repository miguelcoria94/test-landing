<template>
  <div class="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      
      <!-- Blog Header -->
      <BlogHero />
      <BlogHeader />
      

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from './../partials/Header.vue'
import Footer from './../partials/Footer.vue'
import BlogHero from './../partials/BlogHero.vue'
import BlogHeader from './../partials/BlogHeader.vue'

export default {
  name: 'Blog',
  components: {
    Header,
    Footer,
    BlogHero,
    BlogHeader
  },
};
</script>
