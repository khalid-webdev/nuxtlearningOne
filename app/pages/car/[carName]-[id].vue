<script setup>
const route = useRoute();
const {cars} = useCars();

const car = computed(()=>{
  return cars.find((c)=>c.id===parseInt(route.params.id))
})
if(!car.value){
  throw createError({
    status:404,
    message:`Cars of ID no ${route.params.id} is not found!`
  })
}
definePageMeta({
  layout:"custom"
})
</script>
<template>
    <div>
      <CarDetailsHero :car="car"/>
    </div>
    <CarDetailsAttributes :features="car.features"/>
    <CarDetailsDescription :description="car.description"/>
    <CarDetailsContact />

</template>
