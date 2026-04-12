<script setup>

</script>

<template>
  <div class="navbar">
    <nav class="sticky top-0 z-50 space-x-1 border-b p-4 shadow-md bg-gray-100">
      <NuxtLink to="/" class="text-3xl font-semibold">Cartrader</NuxtLink>
    </nav>
  </div>
</template>

<style scoped>
.navbar{
  position: relative;
  display: flex;
  align-items: center;
}
.navbar nav{
  position: sticky;
  width:100%;
  top: 0;
}
</style>
