<script setup>
const props = defineProps({
  title:String,
  name:String,
  options:Array
})
const emit =defineEmits(["onChangeInput"])
const state = ref("");
const onChangeSelect=()=>{
  emit("onChangeSelect",state.value,props.name);
}
</script>
<template>
    <div class="flex flex-col w-[48%]">
      <label for="" class="text-cyan-500 mb-3 text-sm">{{title}}</label>
      <select class="p-2 border rounded w-100" name="" id="" v-model="state" @change="onChangeSelect">
        <option v-for="option in options" :key="option" class="cursor-pointer" :value="option">{{option}}</option>
      </select>
    </div>

</template>
