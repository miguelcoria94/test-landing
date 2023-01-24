<template>
  
  <section class="relative">

    
    <div class="max-w-6xl mx-auto px-4 sm:px-6 pb-12 pt-0">
      <div class="pt-12 md:pt-20">
        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-8">
          <h2 class="h2 font-playfair-display">
            Find a plan that fits your business best
          </h2>
        </div>

        <!-- Pricing tables -->
        <div>
          <div class="flex justify-center mb-6">
          <router-link
            class="btn text-white bg-gray-100 hover:bg-mint-600 group"
            to="/schedule-call"
          >
            Take The Quiz
            <span
              class="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2"
            >
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="8"
              >
                <path
                  d="m10.865.013.747.148c.243.065.481.143.716.235.495.18.97.42 1.415.716.265.192.571.343.858.55.096.064.192.135.288.209l.196.154.192.178c.09.08.175.168.254.262.189.21.33.466.414.747.076.275.073.568-.008.84-.09.27-.236.513-.427.708-.096.1-.198.191-.306.274l-.152.117-.116.074c-.369.252-.75.482-1.14.69-.577.315-1.153.585-1.701.932-.408.262-.803.549-1.182.86-.083.064-.16.136-.247.193a.918.918 0 0 1-.113.072.644.644 0 0 1-.118.016.708.708 0 0 1-.191.01.559.559 0 0 1-.246-.088l-.072-.054a1.481 1.481 0 0 1-.141-.107c-.128-.122-.1-.377.05-.726.036-.08.079-.156.128-.226l.316-.401c.164-.188.336-.372.514-.543.178-.17.356-.342.546-.493.19-.152.394-.265.59-.39.53-.329 1.05-.626 1.552-.93-.159.018-.32.034-.48.04-.511.036-1.026.044-1.546.048a43.432 43.432 0 0 1-2.31-.058l-.005-.02a78.728 78.728 0 0 0-2.292-.148c-.279-.016-.558.01-.837-.006L4.543 3.81l-.977-.046a19.357 19.357 0 0 1-.49-.029 12.6 12.6 0 0 0-1.303.013l-.828.055-.406.021H.335l-.18.008c-.145 0-.208-.15-.102-.356.16-.268.422-.46.723-.531.57-.117 1.144-.205 1.72-.264.287-.026.576-.048.865-.053.29-.004.578.01.865.042.69.065 1.408-.015 2.113-.015.776.003 1.549.02 2.324.04l1.428.039 1.087.039c.359.012.716.02 1.075.013.442-.008.879-.065 1.318-.112a3.672 3.672 0 0 0-.186-.166 9.045 9.045 0 0 0-1.06-.762 9.82 9.82 0 0 0-1.034-.537 5.9 5.9 0 0 1-1.284-.854c-.12-.115-.053-.199.12-.26a1.55 1.55 0 0 1 .738-.083Z"
                />
              </svg>
            </span>
          </router-link>
        </div>
          <!-- Pricing toggle -->
          <!-- <div class="flex justify-center max-w-[10rem] m-auto mb-8 lg:mb-14">
            <div class="relative flex w-full p-1 bg-gray-100 rounded-full">
              <span
                class="absolute inset-0 m-1 pointer-events-none"
                aria-hidden="true"
              >
                <span
                  class="absolute inset-0 w-1/2 bg-green-500 rounded-full shadow-sm transform transition duration-150 ease-in-out"
                  :class="annual ? 'translate-x-full' : 'translate-x-0'"
                ></span>
              </span>
              <button
                class="relative flex-1 text-sm font-playfair-display font-bold h-8 transition duration-150 ease-in-out"
                :class="annual ? 'text-gray-900' : 'text-white'"
                @click.prevent="annual = false"
              >
                Monthly
              </button>
              <button
                class="relative flex-1 text-sm font-playfair-display font-bold h-8 transition duration-150 ease-in-out"
                :class="annual ? 'text-white' : 'text-gray-900'"
                @click.prevent="annual = true"
              >
                Annual
              </button>
            </div>
          </div> -->

          <div
            class="max-w-sm mx-auto grid gap-9 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none pt-4 mb-9"
          >
            <!-- Pricing table 1 -->
            <div
              class="relative flex flex-col h-full p-6 rounded bg-mint-500"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="mb-6">
                <div
                  class="font-playfair-display text-green-500 text-xl font-bold mb-6"
                >
                Essentials
                </div>
                <!-- <div
                  class="font-playfair-display text-gray-900 font-bold inline-flex items-baseline mb-2"
                >
                  <span class="text-3xl">$</span>
                  <span class="text-5xl">{{ annual ? "449" : "499" }}</span>
                  <span>/mo</span>
                </div> -->
                <div class="text-white mb-6">
                  Start building your team and hire the most talented workers in
                  the world.
                </div>
              </div>
              <div class="font-playfair-display font-bold mb-4">
                <span class="text-green-500">
                  Features include:
                </span>
                
              </div>
              <ul class="text-gray-900 space-y-3 grow">
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                    />
                  </svg>
                  <span class="text-white">All Account Types</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                    />
                  </svg>
                  <span class="text-white">Resource Management</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                    />
                  </svg>
                  <span class="text-white">Appointment Synchronization</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                    />
                  </svg>
                  <span class="text-white">Mental Health Safety Tool </span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                    />
                  </svg>
                  <span class="text-white">Single Sign On (SSO) Integration</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                    />
                  </svg>
                  <span class="text-white-900">Behavioral Health Content</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                    />
                  </svg>
                  <span class="text-white-900">Email Notifications</span>
                </li>
              </ul>
            </div>

            <!-- Pricing table 2 -->
            <div
              class="relative flex flex-col h-full p-6 rounded bg-green-500"
              data-aos="fade-up"
            >
              <div class="mb-6">
                <div
                  class="font-playfair-display text-gray-900 text-xl font-bold mb-6"
                >
                  Advantage
                </div>
                <!-- <div
                  class="font-playfair-display text-gray-900 font-bold inline-flex items-baseline mb-2"
                >
                  <span class="text-3xl">$</span>
                  <span class="text-5xl">{{ annual ? "749" : "799" }}</span>
                  <span>/mo</span>
                </div> -->
                <div class="text-gray-900 mb-6">
                  
                    Start building your team and hire the most talented workers in
                  the world.
                  
                </div>
              </div>
              <div class="font-playfair-display font-gray-700 font-bold mb-4">
                <span class="text-white">
                  Everything in Essentials, plus:
                </span>
                
              </div>
              <ul class="text-gray-900 space-y-3 grow">
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-current text-mint-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                    />
                  </svg>
                  <span>Email + SMS Notifications</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-current text-mint-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                    />
                  </svg>
                  <span>Calendar Integration</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-current text-mint-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                    />
                  </svg>
                  <span>Smart Resource Library</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-current text-mint-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                    />
                  </svg>
                  <span>Analytics & Trends</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-current text-mint-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                    />
                  </svg>
                  <span>Professional Activity Log </span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-current text-mint-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                    />
                  </svg>
                  <span>White Label</span>
                </li>
              </ul>
            </div>

            <!-- Pricing table 3 -->
            <div
              class="relative flex flex-col h-full p-6 rounded bg-orange-500"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="mb-6">
                <div
                  class="font-playfair-display text-gray-900 text-xl font-bold mb-1"
                >
                  Enterprise
                </div>
                <div
                  class="font-playfair-display text-gray-900 font-bold inline-flex items-baseline mb-2"
                >
                  <span class="text-3xl mt-2.5">Contact us</span>
                </div>
                <div class="text-gray-900 mb-6">
                  Start building your team and hire the most talented workers in
                  the world.
                </div>
              </div>
              <div class="font-playfair-display font-bold mb-4">
                Everything in Pro, plus:
              </div>
              <ul class="text-gray-900 space-y-3 grow">
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                    />
                  </svg>
                  <span>Unlimited placeholder texts</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                    />
                  </svg>
                  <span>Consectetur adipiscing elit</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                    />
                  </svg>
                  <span>Excepteur sint occaecat cupidatat</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                    />
                  </svg>
                  <span>Officia deserunt mollit anim</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Pricing",
  setup() {
    const annual = ref(false);

    return {
      annual,
    };
  },
};
</script>
