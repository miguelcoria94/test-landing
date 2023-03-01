<template>
  <header class="absolute w-full z-30">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-20">
        <!-- Site branding -->
        <div class="shrink-0 mr-4">
          <!-- Logo -->
          <router-link to="/" class="block" aria-label="Cruip">
            <img class="h-7" src="/src/images/tad-logo.png" alt="tadhealth-nav-logo">
          </router-link>
        </div>

        <!-- Desktop navigation -->
        <nav class="hidden md:flex md:grow">
          <!-- Desktop menu links -->
          <ul class="flex grow justify-end flex-wrap items-center">
            <Dropdown title="Our Solutions">
              <li>
                <router-link
                  to="/education"
                  class="font-medium text-sm text-gray-400 hover:text-green-600 flex py-2 px-4 leading-tight"
                  ><i class="las la-university header-icon"></i> For Education </router-link
                >
              </li>
              <li>
                <router-link
                  to="/organizations"
                  class="font-medium text-sm text-gray-400 hover:text-green-600 flex py-2 px-4 leading-tight w-80"
                  ><i class="las la-building header-icon"></i> For Organizations</router-link
                >
              </li>
              <!-- <li>
                <router-link
                  to="/enterprise"
                  class="font-medium text-sm text-gray-400 hover:text-green-600 flex py-2 px-4 leading-tight"
                  ><i class="las la-building header-icon"></i> Enterprise </router-link
                >
              </li> -->
            </Dropdown>
            
            <!-- <li>
              <router-link
                to="/get-involved"
                class="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out"
                >Get Involved</router-link
              >
            </li> -->
            <!-- <li>
              <router-link
                to="/blog"
                class="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out"
                >Request A Demo</router-link
              >
            </li> -->
            <li>
              <router-link
                to="/whytadhealth"
                class="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out"
                >Why TadHealth?</router-link
              >
            </li>
            <li>
              <router-link
                to="/about"
                class="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out"
                >About</router-link
              >
            </li>
            <!-- 1st level: hover -->
            <Dropdown title="Resources">
              <li>
                <router-link
                  to="/blog"
                  class="font-medium text-sm text-gray-400 hover:text-green-600 flex py-2 px-4 leading-tight"
                  ><i class="las la-book-reader header-icon"></i>Blog</router-link
                >
              </li>
              <li>
                <router-link
                  to="/podcasts"
                  class="font-medium text-sm text-gray-400 hover:text-green-600 flex py-2 px-4 leading-tight"
                  ><i class="las la-microphone header-icon"></i> Podcast</router-link
                >
              </li>
              <li>
                <router-link
                  to="/casestudies"
                  class="font-medium text-sm text-gray-400 hover:text-green-600 flex py-2 px-4 leading-tight"
                  ><i class="las la-flask header-icon"></i> Case Studies</router-link
                >
              </li>
              <!-- <li>
                <router-link
                  to="/enterprise"
                  class="font-medium text-sm text-gray-400 hover:text-green-600 flex py-2 px-4 leading-tight"
                  ><i class="las la-building header-icon"></i> Enterprise </router-link
                >
              </li> -->
            </Dropdown>
          </ul>

          <!-- Desktop sign in links -->
          <ul class="flex grow justify-end flex-wrap items-center">
            <!-- <li>
              <router-link
                to="/signin"
                class="font-medium text-mint-500 hover:text-mint-600 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >Sign in</router-link
              >
            </li> -->
            <li>
              <router-link
                to="/request-demo"
                class="btn-sm text-white bg-mint-500 hover:bg-mint-600 ml-3"
                >Request a demo</router-link
              >
            </li>
          </ul>
        </nav>

        <!-- Mobile menu -->
        <div class="md:hidden">
          <!-- Hamburger button -->
          <button
            class="hamburger"
            ref="hamburger"
            :class="{ active: mobileNavOpen }"
            aria-controls="mobile-nav"
            :aria-expanded="mobileNavOpen"
            @click="mobileNavOpen = !mobileNavOpen"
          >
            <span class="sr-only">Menu</span>
            <svg
              class="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="4" width="24" height="2" rx="1" />
              <rect y="11" width="24" height="2" rx="1" />
              <rect y="18" width="24" height="2" rx="1" />
            </svg>
          </button>

          <!-- Mobile navigation -->
          <nav
            id="mobile-nav"
            ref="mobileNav"
            class="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
            :style="[
              mobileNavOpen
                ? { maxHeight: $refs.mobileNav.scrollHeight + 'px', opacity: 1 }
                : { maxHeight: 0, opacity: 0.8 },
            ]"
          >
            <ul class="bg-white shadow-lg px-4 py-2">
              <li>
                <router-link
                  to="/"
                  class="flex text-gray-300 hover:text-gray-200 py-2"
                  >Home</router-link
                >
              </li>
              
              <li>
                <router-link
                to="/whytadhealth"
                  class="flex text-gray-300 hover:text-gray-200 py-2"
                  >Why TadHealth?</router-link
                >
              </li>
              <li>
                <router-link
                  to="/about"
                  class="flex text-gray-300 hover:text-gray-200 py-2"
                  >About</router-link
                >
              </li>
              <li class="py-2 my-2 border-t border-gray-700">
                <span class="flex text-gray-300 py-2">Our Solutions</span>
                <ul class="pl-4">
                  <li>
                    <router-link
                      to="/education"
                      class="text-sm flex font-medium text-gray-400 hover:text-gray-200 py-2"
                      >For Education</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/organizations"
                      class="text-sm flex font-medium text-gray-400 hover:text-gray-200 py-2"
                      >For Organizations</router-link
                    >
                  </li>
                  <!-- <li>
                    <router-link
                      to="/enterprise"
                      class="text-sm flex font-medium text-gray-400 hover:text-gray-200 py-2"
                      >Enterprise</router-link
                    >
                  </li> -->
                </ul>
              </li>
              <li class="py-2 my-2 border-t border-b border-gray-700">
                <span class="flex text-gray-300 py-2">Resources</span>
                <ul class="pl-4">
                  <li>
                    <router-link
                      to="/blog"
                      class="text-sm flex font-medium text-gray-400 hover:text-gray-200 py-2"
                      >Blog</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/podcasts"
                      class="text-sm flex font-medium text-gray-400 hover:text-gray-200 py-2"
                      >Podcasts</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/casestudies"
                      class="text-sm flex font-medium text-gray-400 hover:text-gray-200 py-2"
                      >Case Studies</router-link
                    >
                  </li>
                </ul>
              </li>
              <li>
                <router-link
                  to="/signin"
                  class="flex font-medium w-full text-mint-500 hover:text-mint-600 py-2 justify-center"
                  >Sign in</router-link
                >
              </li>
              <li>
                <router-link
                  to="/request-demo"
                  class="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white bg-mint-500 hover:bg-mint-600 transition duration-150 ease-in-out"
                  >Request a demo</router-link
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Dropdown from "./../utils/Dropdown.vue";

export default {
  name: "Header",
  components: {
    Dropdown,
  },
  data: function () {
    return {
      mobileNavOpen: false,
    };
  },
  methods: {
    clickOutside(e) {
      if (
        !this.mobileNavOpen ||
        this.$refs.mobileNav.contains(e.target) ||
        this.$refs.hamburger.contains(e.target)
      )
        return;
      this.mobileNavOpen = false;
    },
    keyPress() {
      if (!this.mobileNavOpen || event.keyCode !== 27) return;
      this.mobileNavOpen = false;
    },
  },
  mounted() {
    document.addEventListener("click", this.clickOutside);
    document.addEventListener("keydown", this.keyPress);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.clickOutside);
    document.removeEventListener("keydown", this.keyPress);
  },
};
</script>

<style scoped>
.header-icon {
  font-size: 1rem;
  margin-right: .5rem;
}
</style>