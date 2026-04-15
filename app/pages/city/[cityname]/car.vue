<script setup>
const router = useRouter();
const route = useRoute()
definePageMeta({
  layout: "custom"
})
useHead({
  title: `Cars in ${route.params.cityname}`
})
</script>
<template>
  <div class="mt-32 flex">
    <NuxtErrorBoundary>
      <CarSidebar />
      <NuxtPage />
      <template #error="{ error, clearError }">
        <div class="flex flex-col mx-auto text-center">
          <h1 class="text-4xl text-red-600">Sorry! Something went wrong.</h1>
          <p class="my-4 text-2xl text-gray-600 font-medium">{{ error }}</p>
          <button @click="clearError()" class="transition duration-250 ease-in-out px-5 py-2 bg-cyan-600 w-[150px] mx-auto text-white rounded hover:bg-cyan-900">Go Back</button>
        </div>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>
