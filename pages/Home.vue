<template >
  <div>
    <navbar/>
    <div>this is the index {{text}}</div>
  </div>
</template>

<script>
import hello from "../api/index.ts";
import Navbar from "../components/TheNavbar.vue";
export default {
  components: {
    Navbar: Navbar
  },
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
