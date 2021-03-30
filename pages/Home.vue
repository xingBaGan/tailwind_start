<template >
  <div>
    <!-- <navbar/> -->
    <thread-list :threadList="threadList"></thread-list>
    <!-- {{articleList}} -->
    <span @click="getThreadList()" class="block bg-blue-500 m-2 w-60 text-center text-white"> get the data</span>
  </div>
</template>

<script>
import ThreadList from '../components/ThreadList'
import {useThreadList} from '@/compositions'
import { useContext,ref,useFetch,toRefs  } from '@nuxtjs/composition-api'
import Navbar from "../components/TheNavbar.vue";
export default {
  components: {
    Navbar: Navbar,
    ThreadList,
    ThreadList
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
      text: "hello world",
    };
  },
  setup(){
    const {
      state : action,
      getThreadList
    } = useThreadList()
    return {
      ...toRefs(action),
      getThreadList
    }
  }
};
</script>

<style>
</style>
