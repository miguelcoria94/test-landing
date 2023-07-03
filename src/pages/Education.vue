<template>
  <div class="flex flex-col min-h-screen">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">
      
      <TargetTwo />
      <Cta />
      <EducationFeatureTwo />
      
      <!-- <EducationFeature /> -->
      <!-- <Pricing /> -->
      
      <CompanyLogos />

      <CtaEducation />
    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from './../partials/Header.vue'
import Footer from './../partials/Footer.vue'
import TargetTwo from './../partials/TargetTwo.vue'
import EducationFeature from './../partials/EducationFeature.vue'
import EducationFeatureTwo from './../partials/EducationFeatureTwo.vue'
import CompanyLogos from './../partials/CompanyLogos.vue'
import CtaEducation from './../partials/CtaEducation.vue'
import Pricing from "./../partials/Pricing.vue"
import Cta from './../partials/Cta.vue'

export default {
  name: 'education',
  components: {
    Header,
    Footer,
    TargetTwo,
    EducationFeature,
    EducationFeatureTwo,
    CompanyLogos,
    CtaEducation,
    Pricing,
    Cta
  },
};
</script>
