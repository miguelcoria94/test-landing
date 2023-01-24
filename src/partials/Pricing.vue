<template>
  
  <section class="relative">

    
    <div class="max-w-6xl mx-auto px-4 sm:px-6 pb-12 pt-0">
      <div class="pt-6 md:pt-12">
        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-10">
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
            Take The Quiz <i class="las la-file-invoice  group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2"></i>
            <span
              class="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2"
            >
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
                <div class="mb-6 text-green-400">
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
                    class="w-3 h-3 fill-current text-green-700 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                    />
                  </svg>
                  <span class="text-green-400">All Account Types</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-current text-green-700 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                    />
                  </svg>
                  <span class="text-green-400">Resource Management</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-current text-green-700 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                    />
                  </svg>
                  <span class="text-green-400">Appointment Synchronization</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-current text-green-700 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                    />
                  </svg>
                  <span class="text-green-400">Mental Health Safety Tool </span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-current text-green-700 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                    />
                  </svg>
                  <span class="text-green-400">Single Sign On (SSO) Integration</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-current text-green-700 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                    />
                  </svg>
                  <span class="text-green-400">Behavioral Health Content</span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-current text-green-700 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                    />
                  </svg>
                  <span class="text-green-400">Email Notifications</span>
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
                  class="font-playfair-display text-xl font-bold mb-1"
                >
                <span >Enterprise</span>
                  
                </div>
                <div
                  class="font-playfair-display font-bold inline-flex items-baseline mb-2"
                >
                  <span class="text-3xl mt-2.5">Contact us</span>
                </div>
                <div class=" mb-6">
                  Start building your team and hire the most talented workers in
                  the world.
                </div>
                <a
                class="text-gray-100 hover:text-gray-300 transition duration-150 ease-in-out underline"
                href="/education"
                target="_blank"
                >Request a demo</a
              >
                
              </div>
              <!-- <div class="font-playfair-display font-bold mb-4">
                Everything in Pro, plus:
              </div> -->
              <!-- <ul class="text-gray-900 space-y-3 grow">
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
              </ul> -->
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
