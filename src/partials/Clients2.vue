<template>
  <section class="bg-gray-900">

    <div class="py-12 md:py-20">

      <!-- Section header -->
      <div class="max-w-4xl mx-auto text-center pb-12 md:pb-16">
        <h2 class="h4 font-cabinet-grotesk ">Mental Health Leaders Choose TadHealth</h2>
      </div>

      <!-- Carousel built with Swiper.js [https://swiperjs.com/] -->
      <!-- * Custom styles in src/css/additional-styles/theme.scss -->
      <div class="clients-carousel swiper-container relative before:absolute before:inset-0 before:w-32 before:z-10 before:pointer-events-none before:bg-gradient-to-r before:from-gray-900 after:absolute after:inset-0 after:left-auto after:w-32 after:z-10 after:pointer-events-none after:bg-gradient-to-l after:from-gray-900">
        <div class="swiper-wrapper !ease-linear select-none">
          <!-- Carousel items -->
          <div class="swiper-slide !h-28 !w-28 rounded-2xl flex items-center justify-center group">
            <img class="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out" src="../images/save.png" alt="Client 01" />
          </div>
          <div class="swiper-slide !h-28 !w-28 rounded-2xl flex items-center justify-center group">
            <img class="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out" src="../images/ttp.png" alt="Client 02" />
          </div>
          <div class="swiper-slide !h-28 !w-28 rounded-2xl flex items-center justify-center group">
            <img class="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out" src="../images/bhhs.png" alt="Client 03" />
          </div>
          <div class="swiper-slide !h-28 !w-28 rounded-2xl flex items-center justify-center group">
            <img class="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out" src="../images/mmgray.png" alt="Client 04" />
          </div>
          <div class="swiper-slide !h-28 !w-28 rounded-2xl flex items-center justify-center group">
            <img class="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out" src="../images/bhu.png" alt="Client 05" />
          </div>
          <div class="swiper-slide !h-28 !w-28 rounded-2xl flex items-center justify-center group">
            <img class="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out" src="../images/ca.png" alt="Client 06" />
          </div>
          <div class="swiper-slide !h-28 !w-28 rounded-2xl flex items-center justify-center group">
            <img class="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out" src="../images/pp.png" alt="Client 07" />
          </div>
          <div class="swiper-slide !h-28 !w-28 rounded-2xl flex items-center justify-center group">
            <img class="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out" src="../images/co.png" alt="Client 08" />
          </div>
          <div class="swiper-slide !h-28 !w-28 rounded-2xl flex items-center justify-center group">
            <img class="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out" src="../images/lbc.png" alt="Client 09" />
          </div>
          <div class="swiper-slide !h-28 !w-28 rounded-2xl flex items-center justify-center group">
            <img class="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out" src="../images/gwww.png" alt="Client 10" />
          </div>
          <div class="swiper-slide !h-28 !w-28 rounded-2xl flex items-center justify-center group">
            <img class="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out" src="../images/nais.png" alt="Client 11" />
          </div>
        </div>
      </div>

    </div>

  </section>
</template>

<script>
import { onMounted } from 'vue'

// Import Swiper
import Swiper, { Autoplay } from 'swiper'
import 'swiper/css'

Swiper.use([Autoplay])

export default {
  name: 'Clients',
  setup() {
    onMounted(() => {
      const carousel = new Swiper('.clients-carousel', {
        slidesPerView: 'auto',
        spaceBetween: 26,
        centeredSlides: true,
        loop: true,
        speed: 6000,
        noSwiping: true,
        noSwipingClass: 'swiper-slide',
        autoplay: {
          delay: 0,
          disableOnInteraction: true,
        },
      })
    })
  }
}
</script>