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
                      for="podcast_title"
                      >Title <span class="text-red-600">*</span></label
                    >
                    <input
                        v-model="podcast_title"
                      id="podcast_title"
                      type="text"
                      class="form-input w-full text-gray-300"
                      required
                    />
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-4">
                  <div class="w-full px-3">
                    <label
                      class="block text-gray-300 text-sm font-medium mb-1"
                      for="podcast_description"
                      >Description <span class="text-red-600">*</span></label
                    >
                    <input
                        v-model="podcast_description"
                      id="podcast_description"
                      type="text"
                      class="form-input w-full text-gray-300"
                      required
                    />
                  </div>
                </div>
                
                <div class="flex flex-wrap -mx-3 mb-4">
                  <div class="w-full px-3">
                    <label
                      class="block text-gray-300 text-sm font-medium mb-1"
                      for="thumbnail_in"
                      >Thumbnail Image <span class="text-red-600">*</span></label
                    >
                    <input
                    v-on:change="onImageSelected"
                      id="thumbnail_in"
                      type="file"
                      class="form-input w-full text-gray-300"
                      required
                    />
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-4">
                  <div class="w-full px-3">
                    <label
                      class="block text-gray-300 text-sm font-medium mb-1"
                      for="podcast_in"
                      >Audio File <span class="text-red-600">*</span></label
                    >
                    <input
                       accept="audio/*" v-on:change="onFileSelected"
                      id="podcast_in"
                      type="file"
                      class="form-input w-full text-gray-300"
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
import uploadPodcast from "../api/resources.js"

export default {
  name: "UploadPodcast",
  components: {
    HeaderDash,
    PodcastBanner,
    ArticleBanner,
  },
  data(){
    return {
      podcast_in: null,
      thumbnail_in: null,
      podcast_title: null,
      tags: null,
      target_audience: null,
      podcast_description: null
    }
  },
  methods: {
    async submit(){
      try{
        if (
            !this.podcast_in ||
            !this.thumbnail_in ||
            !this.podcast_title ||
            !this.podcast_description
        ) {
          this.$toast.warning(`Please fill out the entire form`, {
            position: "top-right",
          });
          return;
        }

        await uploadPodcast({
          podcast_in: this.podcast_in,
          thumbnail_in: this.thumbnail_in,
          podcast_title: this.podcast_title,
          podcast_description: this.podcast_description
        })

        this.$router.push('/admin/home')
        this.$toast.success(`You created a new podcast`, {
          position: "top-right",
        });
      } catch(e){
        this.$toast.error(`There was an error submitting your request!`, {
          position: "top-right",
        });
      }
    },
    onFileSelected(event) {
      this.podcast_in = event.target.files[0]
      console.log(event.target.files[0])
    },
    onImageSelected(event) {
      const selectedFile = event.target.files[0];
      if (!selectedFile.type.startsWith('image/')) {
        return alert('Please select an image file.');
      }
      this.thumbnail_in = selectedFile
    }
  }
};
</script>
