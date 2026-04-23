<script setup>
const props = defineProps({
  title:String,
  name:String,
placeholder:String
})
const emit =defineEmits(["onChangeInput"])
const state = ref("");
const onChangeTextarea=()=>{
  emit("onChangeInput",state.value,props.name);
}
</script>
<template>
    <div class="flex flex-col w-full">
      <label for="" class="text-cyan-500 mb-1 text-sm">{{title}}</label>
      <textarea type="text" rows="5" class="border p-2 mb-4" :placeholder="placeholder" :name="name" v-model="state" @input="onChangeTextarea"></textarea>
    </div>
</template>
