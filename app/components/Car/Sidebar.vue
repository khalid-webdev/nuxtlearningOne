<script setup>
const route = useRoute();
const router = useRouter();
const {makes} = useCars();
const city = ref("");
const error = ref("");

const price =ref({
  min:"",
  max:""
})

const priceRange =computed(()=>{
  const minPrice =route.query.minPrice;
  const maxPrice = route.query.maxPrice;

  if(!minPrice &&!maxPrice) return "Any";
  else if(!minPrice && maxPrice){
    return `<$${maxPrice}`
  }else if(minPrice && !maxPrice){
    return `>$${minPrice}`
  }else if(minPrice === maxPrice){
    return
  }else{
    return `$${minPrice}-$${maxPrice}`
  }
})


const modal = ref({
  location:false,
  make:false,
  price:false
});


const updateModal=(key)=>{
  modal.value[key] =! modal.value[key];
}
const onChangeLocation = ()=>{
  if(!city.value)return
  //"4379239475" =4379239475
  //"ottowa" = NAN
  if(!isNaN(parseInt(city.value))){
    throw createError({
      status:401,
      message:"invalid city format"
    })
  }
  updateModal("location")
  navigateTo(`/city/${city.value}/car/${route.params.make}`)
  city.value = ""
}

const handleCompany = (name) =>{
  updateModal("make")
  navigateTo(`/city/${route.params.cityname}/car/${name.toLowerCase()}`)
}
const onPriceChange = () =>{

  if(price.value.min < 0 || price.value.min === price.value.max || price.value.max < price.value.min){
    return error.value ="max price should be > min price"
  }
  router.push({
    query:{
      minPrice :price.value.min,
      maxPrice :price.value.max,
    }
  })
  error.value = "";
  updateModal('price');

}

</script>
<template>
    <div class="shadow border w-77 mr-10 z-30 mh-[190px]">
      <div class="py-4 px-2 gap-4 flex justify-between relative cursor-pointer border-b">
        <h3>Location</h3>
        <h3 @click="updateModal('location')" class="text-blue-400 capitalize">{{route.params.cityname}}</h3>
        <div v-if="modal.location" class="absolute border shadow left-[105%] p-5 top-1 -m-1 bg-white">
              <input v-model="city" type="text" class="border p-1 rounded" placeholder="type location"/>
              <button @click="onChangeLocation" class="bg-blue-400 w-full mt-2 rounded text-white p-1">
                Apply
              </button>
            </div>
      </div>

      <div class="py-4 px-2 flex justify-between relative cursor-pointer border-b relative">
        <h3 class="text-left">Make</h3>
        <h3 @click="updateModal('make')" class="text-right text-blue-400 capitalize">{{route.params.make||"Any"}}</h3>
        <div v-if="modal.make" class=" bg-white w-[400px] h-auto border rounded p-3 absolute shadow left-[105%] top-0">
          <h1 class="text-xl text-blue-400 mb-3 font-medium">Car company:</h1>
          <div class="flex flex-wrap justify-between gap-3">
            <CarMake v-for="(make) in makes" :key="make" :make="make" @company="handleCompany"/>
            </div>
          </div>
      </div>

      <div class="py-4 px-2 flex justify-between relative cursor-pointer border-b">
        <h3 class="mr-3">Price</h3>
        <h3 class="text-blue-400 capitalize" @click="updateModal('price')">{{priceRange}}</h3>
        <div v-if="modal.price" class="absolute top-0 left-[105%] w-[200px] bg-white shadow p-3 rounded">
          <input type="number" placeholder="min price" v-model.trim="price.min" class="w-full bg-slate-50 p-1 rounded">
          <input type="number" placeholder="max price" v-model.trim="price.max" class="w-full bg-slate-50 p-1 my-2 rounded">
          <p class="text-red-400 text-sm mb-2">{{error}}</p>
          <button class="w-full p-1 bg-blue-400 text-white hover:bg-sky-600 rounded" @click="onPriceChange">Apply</button>
          </div>
      </div>
    </div>
</template>
