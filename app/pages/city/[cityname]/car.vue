<script setup>
const router = useRouter();
const route = useRoute()
definePageMeta({
  layout:"custom"
})
useHead({
  title:`Cars in ${route.params.cityname}`
})
</script>
<template>
    <div class="mt-32 flex">
      <CarSidebar />
      <NuxtPage />
    </div>
</template>
