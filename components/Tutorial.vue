<!-- Please remove this file from your project -->
<template>
  <div class="relative flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:pt-0">
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8 text-center">
      <h1 class="text-4xl mb-2 tracking-widest uppercase">C-H-E-R-R-Y<br>B-L-O-S-S-O-M-S</h1>
      <p class="text-2xl mb-8">Hit the button below, get a Spring word, do the workout.</p>
      <NuxtLink to="/workout" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Give me a Spring word!
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtTutorial',
  methods: {
    goToPage() {
    }
  }
}
</script>
