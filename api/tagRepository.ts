import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { Tag, ResponseType } from '~/types/index'

export const tagRepository = (axios: NuxtAxiosInstance) => ({
  getTagList(): ResponseType<'tags', Tag[]> {
    return axios.$get('/tags')
  },
})

export type TagRepository = ReturnType<typeof tagRepository>
