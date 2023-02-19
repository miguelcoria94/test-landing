<template>
  <div class="flex h-screen overflow-hidden">
    <!-- Content area -->
    <div
      class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden"
    >
      <!-- Site header -->
      <HeaderDash
        :sidebarOpen="sidebarOpen"
        @toggle-sidebar="sidebarOpen = !sidebarOpen"
      />

      <main>
        <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-hkgrotesk font-extrabold mb-10">
            Upload New Podcast
          </h2>

          <form @submit.prevent="submit()" class="bg-white p-5">
                <div class="flex flex-wrap -mx-3 mb-4">
                  <div class="w-full px-3">
                    <label
                      class="block text-gray-300 text-sm font-medium mb-1"
                      for="email"
                      >Title <span class="text-red-600">*</span></label
                    >
                    <input
                        v-model="email"
                      id="email"
                      type="email"
                      class="form-input w-full text-gray-300"
                      required
                    />
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-4">
                  <div class="w-full px-3">
                    <label
                      class="block text-gray-300 text-sm font-medium mb-1"
                      for="email"
                      >Description <span class="text-red-600">*</span></label
                    >
                    <input
                        v-model="email"
                      id="email"
                      type="email"
                      class="form-input w-full text-gray-300"
                      required
                    />
                  </div>
                </div>
                
                <div class="flex flex-wrap -mx-3 mb-4">
                  <div class="w-full px-3">
                    <label
                      class="block text-gray-300 text-sm font-medium mb-1"
                      for="email"
                      >Thumbnail Image <span class="text-red-600">*</span></label
                    >
                    <input
                      id="email"
                      type="file"
                      class="form-input w-full text-gray-300"
                      placeholder="you@yourcompany.com"
                      required
                    />
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-4">
                  <div class="w-full px-3">
                    <label
                      class="block text-gray-300 text-sm font-medium mb-1"
                      for="email"
                      >Audio File <span class="text-red-600">*</span></label
                    >
                    <input
                      id="email"
                      type="file"
                      class="form-input w-full text-gray-300"
                      placeholder="you@yourcompany.com"
                      required
                    />
                  </div>
                </div>
                
                
                
                <div class="flex flex-wrap -mx-3 mt-6">
                  <div class="w-full px-3">
                    <button
                      class="btn text-white bg-green-600 hover:bg-green-700 w-full"
                    >
                      Upload Podcast
                    </button>
                  </div>
                </div>
              </form>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import HeaderDash from "../partials/HeaderDash.vue";
import PodcastBanner from "../partials/PodcastBanner.vue";
import ArticleBanner from "../partials/ArticleBanner.vue";

export default {
  name: "UploadPodcast",
  components: {
    HeaderDash,
    PodcastBanner,
    ArticleBanner,
  },
};
</script>
