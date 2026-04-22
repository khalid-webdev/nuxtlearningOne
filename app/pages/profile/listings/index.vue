<script setup>
const {listings} = useCars();

definePageMeta({
  layout:"custom"
})
</script>
<template>
  <div>
    <div class="conatiner">
      <header class="flex font-bold justify-between my-10 ">
        <h1 class="font-bold text-5xl text-slate-800">My Listings</h1>
        <NuxtLink to="/profile/listings/create" class="text-white text-3xl pt-1 font-bold rounded-full bg-blue-500 w-14 h-14 text-center">+</NuxtLink>
      </header>

      <div class="flex flex-col gap-4 shadow rounded">
        <CarProfileListings v-for="listing in listings" :key="listing.id" :listing="listing"/>

        </div>
    </div>
  </div>
</template>
