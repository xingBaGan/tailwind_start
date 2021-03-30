<template>
  <div class="mx-4"> 
        <div class="h-40 bg-indigo-600  " v-for="thread in threadList" :key="thread.id">
      <div class=" py-4 text-2xl" > {{thread.title}} </div>
      <div class=" text-gray-300" v-if="thread.slug"> {{thread.slug}} </div>
        <span>显示全部</span>
        <div class="m-4">
          <span class="m-2 border border-white border-2 border-solid">回答</span>
          <span class="m-2 border border-white border-2 border-solid ml-2">关注</span>
        </div>
     </div>
  </div>
     
</template>

<script>
    export default {
        props:{
            threadList:Array
        }
    }
</script>

<style scoped>

</style>