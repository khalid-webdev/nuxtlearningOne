<script setup>
const cityName = ref("");
const cityError = ref(false);
const handleSearchBtn = () => {
  if (!cityName.value) {
    return cityError.value = true;
  }
  navigateTo(`/city/${cityName.value}/car`)
  cityError.value = false;
}
</script>

<template>
  <div class="searchbox flex items-center w-1/3 h-10 bg-white rounded-sm mt-8">
    <input class="p-2 w-full bg-transparent outline-none rounded-sm border-red-700 border" type="text"
      placeholder="City name here..." v-model=cityName>
    <button @click="handleSearchBtn()" class="h-full px-4 text-lg bg-blue-600 text-white">Search</button>
  </div>
  <h6 v-if="cityError" class="px-3 text-red-500 bg-gray-100 mt-3">Input field is empty</h6>
</template>

<style lang="scss" scoped></style>
