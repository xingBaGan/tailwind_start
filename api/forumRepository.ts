import { NuxtAxiosInstance } from '@nuxtjs/axios'
import {
  Forum
} from '~/types/index2'
import {
  ResponseType,
  OptionalPick,
  ResponseTypes,
  CustomErrors,
} from '~/types/index'
import { LIMIT_LIST_ITEM } from '@/constants'

export interface ForumListRequest  {

 categoryId?: string
  gameId?: string
}

type Id = string
type ForumResponse = ResponseType<'forum',Forum>

type ForumListResponse = ResponseTypes<
  Forum[]
>
export const forumRepository = (axios: NuxtAxiosInstance) => ({
  getList(){
    return axios.$get('/api2/forums')
  }
  // getFeedForumList({
  //   limit = LIMIT_LIST_ITEM,
  //   offset = 0,
  // }: FeedForumListRequest = {}): ForumListResponse {
  //   return axios.$get('/articles/feed', {
  //     params: {
  //       limit,
  //       offset,
  //     },
  //   })
  // },
  // createForum(payload: CreateForumRequest): ForumResponse | CustomErrors {
  //   return axios.$post('/articles', { forum: payload })
  // },
  // updateForum(request: UpdateForumRequest): ForumResponse | CustomErrors {
  //   return axios.$put(`/articles/${request.slug}`, { forum: request.payload })
  // },
  // deleteForum(slug: Slug) {
  //   return axios.$delete(`/articles/${slug}`)
  // },
  // favoriteForum(slug: Slug): ForumResponse {
  //   return axios.$post(`/articles/${slug}/favorite`)
  // },
  // unFavoriteForum(slug: Slug): ForumResponse {
  //   return axios.$delete(`/articles/${slug}/favorite`)
  // },
})
export type ForumRepository = ReturnType<typeof forumRepository>
