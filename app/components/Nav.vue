<script setup>
let user =null;

</script>

<template>
  <div class="navbar sticky top-0 z-50">
    <nav class=" space-x-1 border-b p-4 shadow-md bg-gray-100 flex justify-between items-center">
      <NuxtLink to="/" class="text-3xl font-semibold">Cartrader</NuxtLink>
      <div v-if="user" class="flex gap-2">
        <NuxtLink to="/profile/listings" class="text-xl font-semibold">Profile</NuxtLink>
        <button class="text-xl font-semibold">Logout</button>
      </div>
        <NuxtLink to="/login"  v-else class="text-xl font-semibold">Login</NuxtLink>
    </nav>

  </div>
</template>

<style scoped></style>
