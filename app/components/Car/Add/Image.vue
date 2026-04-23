<script setup>
//createing a state
const images = useState("carImage",()=>{
  return{
    preview:null, //should be string,
    image:null // should be an object
  }
})
const emits=defineEmits(["imageInput"])
const onChange=(event)=>{
  const input = event.target;
  if(input.files){
    const reader = new FileReader()
    reader.onload=(e)=>{
      images.value.preview = e.target.result;
    }
    images.value.image=input.files[0];
    reader.readAsDataURL(input.files[0]);
    emits("imageInput",input.files[0],"image")
  }
}

</script>
<template>
  <div class="w-[48%]">
    <div class=" mt-2">
      <label class="text-xl font-medium text-cyan-500">Images *</label>
      <form class="mt-2">
        <div class="form-group">
          <div class="relative">
            <input @change="onChange" type="file" class="opacity-0 absolute" placeholder="upload">
            <span class="cursor-pointer">Browse file</span>
          </div>
          <div v-if="images.preview" class="mt-3 p-2 border w-58">
            <img :src="images.preview" class="img-fluid">
            </div>
        </div>
      </form>
    </div>
  </div>
</template>
