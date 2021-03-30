import { reactive, ref, useContext } from '@nuxtjs/composition-api'
import { Thread} from '@/types/index2'

type State = {
  threadList: Thread[]
}
export default function useThreadList(){
  const { $repository } = useContext()
  const state = reactive<State>({
    threadList: [],
  })
  const getThreadList = async () => {
    state.threadList = await $repository.thread.getList()
  }
  return {
    state,
    getThreadList
  }
}
