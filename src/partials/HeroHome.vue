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
      <div class="pt-12 pb-8 md:pt-20 md:pb-8">
        <!-- Section header -->
        <div class="text-center pb-6 md:pb-1">
          <h1
            class="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-10"
            data-aos="zoom-y-out"
          >
            Connected Mental Health
            <div class="scroller">
              <span
                class="bg-clip-text text-transparent bg-gradient-to-r from-mint-400 to-mint-600"
              >
              Access.<br/>
              Safety.<br/>
              Resources.<br/>
              Professionals.
              </span>
            </div>
          </h1>
          <div class="max-w-3xl mx-auto">
            <p
              class="text-xl text-gray-400 mb-8"
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              Fewer Steps. Better Care.
            </p>
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

<style scoped>
a {
  text-decoration: none;
  font-weight: bold;
  background: linear-gradient(
    135deg,
    rgba(43, 171, 217, 1) 0%,
    rgba(0, 130, 200, 1) 100%
  );
  -webkit-background-clip: text;
  color: transparent;
}



/* Scroller styling */
.scroller {
  height: 1.2em;
  line-height: 1.2em;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
}
.scroller > span {
  position: absolute;
  top: 0;
  animation: slide 7s infinite;
  font-weight: bold;
}
@keyframes slide {
  0% {
    top: 0;
  }
  25% {
    top: -1.2em;
  }
  50% {
    top: -2.4em;
  }
  75% {
    top: -3.6em;
  }
}

@media (max-width: 560px) {
  .scroller {
    right : 0%;
  }
}
</style>
