<!-- Please remove this file from your project -->
<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet">
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <a target="_blank" href="https://wegodev.com" class="logo text-4xl leading-7 font-semibold text-center">
        wegodev
      </a>
      <div v-for="article in articles" class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        <h2 class="text-2xl leading-7 font-semibold">{{ article.title }}</h2>
        <p class="mt-3 text-gray-600">{{ article.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
              articles: {}
            }
        },
        methods: {
        },
        mounted : function(){
            // this.articles
          this.$axios.$get('/api/articles').then(response => {
            this.articles = response.article
          }) 
        }
    }
</script>

<style scoped>
  .logo{
    display: block;
    text-align: center;
  }
</style>


