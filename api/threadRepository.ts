import { NuxtAxiosInstance } from '@nuxtjs/axios'

export const threadRepository = (axios: NuxtAxiosInstance) => ({
    getList(){
      return axios.$get('/api2/threads')
    }
})
export type ThreadRepository = ReturnType<typeof threadRepository>
