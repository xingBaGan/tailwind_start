<template >
  <div>
    <!-- <navbar/> -->
    {{list}}
    {{articleList}}
    <div>this is the index</div>
  </div>
</template>

<script>
import {useArticleList} from '@/compositions'
import { useContext,ref,useFetch,toRefs  } from '@nuxtjs/composition-api'
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
    const {
      state,
      feedType,
      getArticleList,
      getFeedArticleList,
      getArticleListByTag,
      getArticleListByFeed,
      toggleFavoriteArticleByList,
    } = useArticleList()

    let list = ref([])
       const { fetch, fetchState } = useFetch(async () => {
        list.value = await $repository.forum.getList()
    })

    return {
      list,
      ...toRefs(state),
      getArticleList
    }
  },
  beforeMount(){
    this.articleList= this.getArticleList()
  }
};
</script>

<style>
</style>
