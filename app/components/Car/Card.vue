<script setup>
import heartFilled from '@/assets/heartFilled.png';
import heartOutline from '@/assets/heartOutline.png';
const {car,favored}=defineProps(['car','favored'])
// const favor = ref(false);
const emit = defineEmits(["favor"])

</script>
<template>
      <div
        class="relative shadow border w-full overflow-hidden mb-5 cursor-pointer h-[200px]"
      >
<img @click="$emit('favor',car.id)" class="absolute w-6 h-6 z-20 right-5 top-2" :src="favored? heartFilled:heartOutline" alt="">
        <div @click="navigateTo(`/car/${car.name}-${car.id}`)" class="flex h-full">
          <NuxtImg
            :src="car.url"
            alt=""
            class="w-[300px] h-full"
          />
          <div class="p-4 flex flex-col">
            <div class="flex flex-col justify-between">
              <h1 class="text-2xl text-blue-700">{{car.name}}</h1>
              <p class="text-gray-700 h-[90px] overflow-y-auto">
            {{car.description}}
              </p>
            </div>
            <h1 class="mt-auto text-xl">${{car.price}}</h1>
          </div>
        </div>
      </div>
</template>
<style scoped>
p{
  scroll-behavior: smooth;
  scrollbar-width: thin;
}

</style>
