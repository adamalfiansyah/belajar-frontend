<!-- Please remove this file from your project -->
<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet">
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <a target="_blank" href="https://wegodev.com" class="mb-8 logo text-4xl leading-7 font-semibold text-center">
        wegodev
      </a>
      <div class="bg-article shadow p-6 sm:rounded-lg">
        <h2 class="font-weight-bold text-2xl mb-4">{{ $t('ARTICLE_FAV') }}</h2>
        <div v-for="article in articles" class="mb-4 bg-white overflow-hidden shadow sm:rounded-lg p-6">
          <h3 class="text-2xl leading-7 font-semibold">{{ article.title }}</h3>
          <p class="mt-3 text-gray-600">{{ article.title }}</p>
        </div>
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
  .bg-article{
    background: #efefef;
  }
  .logo{
    display: block;
    text-align: center;
  }
</style>


