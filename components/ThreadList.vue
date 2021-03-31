<template>
  <div>
    <div class="px-4 bg-purple-800 bg-opacity-80" v-for="thread in threadList" :key="thread.id">
      <div class="py-4 text-2xl text-gray-300 hover:text-red-700">{{thread.title}}</div>
      <div class="inline text-gray-300" v-if="thread.slug">{{thread.slug}}</div>
      <span class="hover:bg-red-200">显示全部</span>
      <div class="mt-4">
        <span class="px-2 py-1 border border-2 border-white border-solid">回答</span>
        <span class="px-2 py-1 border border-2 border-white border-solid">关注</span>
        <span class="px-2 py-1 text-gray-200">7 个回答</span>
        <span class="px-2 py-1 text-gray-200">13 个关注</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    threadList: Array
  }
};
</script>

<style scoped>
</style>
