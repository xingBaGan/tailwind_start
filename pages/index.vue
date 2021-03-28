<template >
  <div>this is the index {{text}}</div>
</template>

<script>
import hello from "../api/index.ts";
export default {
  components: {},
  head: {
    title: "Home page",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Home page description"
      }
    ]
  },
  data() {
    return {
      text: hello()
    };
  }
};
</script>

<style>
</style>
