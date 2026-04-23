<script setup>
const props = defineProps({
  title:String,
  name:String,
placeholder:String
})
const emit =defineEmits(["onChangeInput"])
const state = ref("");
const onChangeInput=()=>{
  // emit("onChangeInput",state.value,props.name);
  console.log(state.value)
}
</script>
<template>
    <div class="flex flex-col w-[48%]">
      <label for="" class="text-cyan-500 mb-1 text-sm">{{title}}</label>
      <input v-model="state" class="border p-2 mb-4" type="text" :placeholder="placeholder" @input="onChangeInput">
    </div>
</template>
