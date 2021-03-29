<template >
  <div>
    <!-- <navbar/> -->
    {{list}}
    {{articles}}
    <div>this is the index</div>
  </div>
</template>

<script>
import { useContext,ref,useFetch  } from '@nuxtjs/composition-api'
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
      text: "hello world",
    };
  },
  setup(){
    const { $repository } = useContext()
    let list = ref([])
       const { fetch, fetchState } = useFetch(async () => {
        list.value = await $repository.forum.getList()
    })
    let articles = ref([])
     useFetch(async () => {
        articles.value = await $repository.article.getArticleList()
    })
    return {
      list,
      articles
    }
  }
};
</script>

<style>
</style>
