import { reactive, ref, useContext } from '@nuxtjs/composition-api'
// import {  } from '@/api/forumRepository'
import { Forum} from '@/types/index2'

type State = {
  forumList: Forum[]
}
export default function useForumList(){
  const { $repository } = useContext()
  const state = reactive<State>({
    forumList: [],
  })
  const getForumList = async () => {
    state.forumList = await $repository.forum.getList()
  }
  return {
    state,
    getForumList
  }
}
