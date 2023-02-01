<template>
  <Head>
    <title>TadHealth | Manage Podcasts</title>
  </Head>
  <div class="flex flex-col min-h-screen overflow-hidden">
    <!-- Site header -->
    <HeaderDash/>

    <!-- Page content -->
    <main class="grow">
      <!-- Page illustration -->
      <PodcastsTable />
    </main>
  </div>
</template>

<script>
import { Head } from "@vueuse/head";
import HeaderDash from "./../partials/HeaderDash.vue";
import PageIllustration from "../partials/PageIllustration.vue";
import HeroAbout from "../partials/HeroAbout.vue";
import TeamImages from "../partials/TeamImages.vue";
import Timeline from "../partials/Timeline.vue";
import Team from "../partials/Team.vue";
import PodcastsTable from "../partials/PodcastsTable.vue"
import TestimonialsCarousel from "../partials/TestimonialsCarousel.vue";
import Career from "../partials/Career.vue";
import Clients from "../partials/Clients.vue";
import Newsletter from "../partials/Newsletter.vue";
import Footer from "./../partials/Footer.vue";

export default {
  name: "PodcastsList",
  components: {
    Head,
    HeaderDash,
    PageIllustration,
    HeroAbout,
    TeamImages,
    PodcastsTable,
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
