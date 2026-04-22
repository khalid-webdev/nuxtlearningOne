<script setup>
defineProps({
  make:String
})
const emit = defineEmits(["company"])
</script>
<template>
  <div class="flex justify-between w-1/5">
    <h4 @click="$emit('company',make)" class="hover:underline text-sm">{{make}}</h4>
  </div>
</template>
