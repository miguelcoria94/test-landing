<template>
  <div class="flex flex-col min-h-screen overflow-hidden">
    <Head>
      <title>TadHealth | Case Study</title>
    </Head>
    <Header />
    <!-- Page content -->
    <main class="grow">
    </main>

    <!-- Site footer -->
    <Footer />
  </div>
</template>

<script>
import { Head } from "@vueuse/head";
import Footer from "./../partials/Footer.vue";
import Header from "./../partials/Header.vue";

export default {
  name: "CaseStudies",
  components: {
    Head,
    Header,
    Footer,
  },
};
</script>
