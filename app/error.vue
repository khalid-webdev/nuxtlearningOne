<script setup>
const error = useError()
const handleGoBack =()=>{
  clearError({
    redirect:"/"
  })
}
</script>
<template>
  <div class="flex items-center justify-center flex-col h-screen">
    <div class="w-[300px] mb-5"><img src="https://static.vecteezy.com/system/resources/thumbnails/040/973/832/small/sad-red-car-cartoon-character-crashed-and-broken-vehicle-hand-drawn-illustration-isolated-on-transparent-background-vector.jpg" alt=""></div>
    <h1 class="text-9xl text-cyan-950">{{error.status}}</h1>
    <p class="text-4xl my-4 text-gray-500">{{error.message}}</p>
    <button @click="handleGoBack()" class="text-white bg-sky-400 px-5 py-2 rounded border">Go Back</button>
  </div>
</template>
