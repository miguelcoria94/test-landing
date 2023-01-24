<template>
  <div class="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">
      <TargetTwo />
      <EducationFeature />
      <EducationFeatureTwo />
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

export default {
  name: 'education',
  components: {
    Header,
    Footer,
    TargetTwo,
    EducationFeature,
    EducationFeatureTwo,
    CompanyLogos,
    CtaEducation
  },
};
</script>
