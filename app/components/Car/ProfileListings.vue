<script setup>
const {listing}= defineProps({
  listing:Object,
});

</script>
<template>
  <div class="flex justify-between shadow-md rounded p-2 bg-gray-50">
    <div class="flex gap-4">
      <img class="w-80 h-40 object-cover" :src="listing.url" alt="">
      <div class="flex flex-col">
        <h2 class="text-2xl mb-2">{{listing.name}}</h2>
        <p class="text-blue-400 text-xl"> ${{listing.price}}</p>
      </div>
    </div>
    <div class="flex gap-4">
      <NuxtLink class="hover:text-green-500 font-semibold" :to="`/profile/listings/view/${listing.id}`">View</NuxtLink>
      <button class="cursor-pointer text-blue-500 self-start hover:text-red-500 font-semibold">Delete</button>
    </div>
  </div>
</template>
