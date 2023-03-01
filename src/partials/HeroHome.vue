<template>
  <section class="relative">
    <!-- Illustration behind hero content -->

    <div
      class="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
      aria-hidden="true"
    >
      <svg
        width="1360"
        height="578"
        viewBox="0 0 1360 578"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            x1="50%"
            y1="0%"
            x2="50%"
            y2="100%"
            id="illustration-01"
          >
            <stop stop-color="#FFF" offset="0%" />
            <stop stop-color="#EAEAEA" offset="77.402%" />
            <stop stop-color="#DFDFDF" offset="100%" />
          </linearGradient>
        </defs>
        <g fill="url(#illustration-01)" fill-rule="evenodd">
          <circle cx="1232" cy="128" r="128" />
          <circle cx="155" cy="443" r="64" />
        </g>
      </svg>
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- Hero content -->
      <div class="pt-32 pb-8 md:pt-40 md:pb-8">
        <!-- Section header -->
        <div class="text-center pb-6 md:pb-1">
          <h1
            class="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
            data-aos="zoom-y-out"
          >
            Mental Health,
            <span
              class="bg-clip-text text-transparent bg-gradient-to-r from-mint-400 to-mint-600"
            >
              Managed.</span
            >
          </h1>
          <div class="max-w-3xl mx-auto">
            <p
              class="text-xl text-gray-400 mb-8"
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              Less Steps. Better Care.
            </p>
            <div
              class="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
              data-aos="zoom-y-out"
              data-aos-delay="300"
            >
              <div>
                <a
                  class="btn text-white bg-mint-500 hover:bg-mint-600 w-full mb-4 sm:w-auto sm:mb-0"
                  href="/request-demo"
                  >Request Demo</a
                >
              </div>
              <!-- <div>
                <a
                  class="btn text-white bg-mint-500 hover:bg-mint-600 w-full sm:w-auto sm:ml-4"
                  href="/get-involved"
                  >Get Involved</a
                >
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div
        class="relative flex justify-center items-center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <img
          class="py-5"
          src="../images/thumb_cover.jpg"
          width="724"
          height="504"
          alt="Hero"
        />
        <a
          class="absolute group"
          @click.prevent.stop="videoModalOpen = true"
          href="#0"
          aria-controls="modal"
        >
          <svg
            class="w-16 h-16 sm:w-20 sm:h-20 hover:opacity-75 transition duration-150 ease-in-out"
            viewBox="0 0 88 88"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                x1="78.169%"
                y1="9.507%"
                x2="24.434%"
                y2="90.469%"
                id="a"
              >
                <stop stop-color="#EBF1F5" stop-opacity=".8" offset="0%" />
                <stop stop-color="#EBF1F5" offset="100%" />
              </linearGradient>
            </defs>
            <circle fill="url(#a)" cx="44" cy="44" r="44" />
            <path
              class="fill-current text-mint-700"
              d="M52 44a.999.999 0 00-.427-.82l-10-7A1 1 0 0040 37V51a.999.999 0 001.573.82l10-7A.995.995 0 0052 44V44c0 .001 0 .001 0 0z"
            />
          </svg>
        </a>
      </div>

      <!-- Modal -->
      <Modal
        id="modal"
        ariaLabel="modal-headline"
        :show="videoModalOpen"
        @handleClose="videoModalOpen = false"
      >
        <div class="relative pb-9/16">
          <iframe
            class="absolute w-full h-full"
            src="https://player.vimeo.com/video/794280428"
            title="Video"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
    </div>
  </section>
</template>

<script>
import Modal from "./../utils/Modal.vue";

export default {
  name: "HeroHome",
  components: {
    Modal,
  },
  data: function () {
    return {
      videoModalOpen: false,
    };
  },
};
</script>
