<script setup>
definePageMeta({
  layout: "custom"
})
const { makes } = useCars();
const info = useState("adInfo", () => {
  return {
    make: "",
    model: "",
    year: "",
    price: "",
    city: "",
    seats: "",
    descriptions: "",
    image: null
  };
})
const onChangeInput = (data,name) =>{
  info.value[name] = data
}
const inputs = ref([
  {
    id:1,
    title:"Model *",
    name:"model",
    placeholder:"BMW"
  },
  {
    id:2,
    title:"Year *",
    name:"year",
    placeholder:"2018"
  },
  {
    id:3,
    title:"Miles *",
    name:"miles",
    placeholder:"1000"
  },
  {
    id:4,
    title:"Price *",
    name:"price",
    placeholder:"225000"
  },
  {
    id:5,
    title:"City *",
    name:"city",
    placeholder:"Toronto"
  },
  {
    id:6,
    title:"Number of seats *",
    name:"seats",
    placeholder:"4"
  },
  {
    id:7,
    title:"Features *",
    name:"features",
    placeholder:"No accidents, Leather interior"
  },

])


</script>
<template>
  <div>
    <div>
      <h1 class="text-5xl text-slate-700 my-10 font-semibold">Create a new listing</h1>
    </div>
    <div class="shadow border rounded w-[100%] p-2 flex flex-wrap justify-between">
      <CarAddSelect  :options="makes" title="Make *" name="make" @onChangeSelect="onChangeInput"/>
      <CarAddInput v-for="input in inputs" :key="input.id" :title="input.title" :name="input.name" :placeholder="input.placeholder" @onChangeInput="onChangeInput"/>
      <CarAddTextarea title="Description *" placeholder="description" name="description" @onChangeInput="onChangeInput"/>
      <CarAddImage @imageInput="onChangeInput" />

    </div>
  </div>
</template>
