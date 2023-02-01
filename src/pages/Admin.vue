<template>
   <router-view></router-view>
</template>

<script>
import { Head } from "@vueuse/head";
import Header from "./../partials/Header.vue";
import PageIllustration from "../partials/PageIllustration.vue";
import HeroAbout from "../partials/HeroAbout.vue";
import TeamImages from "../partials/TeamImages.vue";
import Timeline from "../partials/Timeline.vue";
import Team from "../partials/Team.vue";
import TestimonialsCarousel from "../partials/TestimonialsCarousel.vue";
import Career from "../partials/Career.vue";
import Clients from "../partials/Clients.vue";
import Newsletter from "../partials/Newsletter.vue";
import Footer from "./../partials/Footer.vue";

export default {
  name: "Admin",
  components: {
    Head,
    Header,
    PageIllustration,
    HeroAbout,
    TeamImages,
    Timeline,
    Team,
    TestimonialsCarousel,
    Career,
    Clients,
    Newsletter,
    Footer,
  },
};
</script>
