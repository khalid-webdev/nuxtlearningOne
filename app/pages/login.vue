<script setup>

definePageMeta({
  layout:"custom"
});
const supabase = useSupabaseClient()
console.log(supabase);
</script>
<template>
  <div>
    <div>
      <h1 class="text-center text-3xl font-semibold my-8">Signup a account!</h1>
    </div>
    <form action="" class="flex flex-col w-[40%] m-auto">
      <input class="my-2 p-2 border" type="text" placeholder="username">
      <input class="my-2 p-2 border" type="email" placeholder="yourmail@email.com">
      <input class="my-2 p-2 border" type="password" placeholder="Password">
      <div class="flex gap-2 my-3 items-center">
        <h3>or continue with</h3>
        <button @click="login" class=" text-blue-400 underline hover:italic text-lg hover:text-blue-500 font-[Poppins]">Google</button>
      </div>
      <button class="rounded border bg-sky-400 text-white p-2">Sign up</button>
    </form>
  </div>
</template>
