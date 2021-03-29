import { NuxtAxiosInstance } from '@nuxtjs/axios'
import {
  Article,
  Author,
  Tag,
  ResponseType,
  OptionalPick,
  ResponseTypes,
  CustomErrors,
} from '~/types/index'
import { LIMIT_LIST_ITEM } from '@/constants'

type Slug = Article['slug']
type UserName = Author['username']
type FeedArticleListRequest = {
  limit?: number
  offset?: number
}
export type CreateArticleRequest = Pick<
  Article,
  'title' | 'description' | 'body'
> &
  OptionalPick<Article, 'tagList'>
export type UpdateArticlePayload = Partial<CreateArticleRequest>
export type UpdateArticleRequest = {
  payload: UpdateArticlePayload
  slug: Slug
}

export interface ArticleListRequest extends FeedArticleListRequest {
  tag?: Tag
  author?: UserName
  favorited?: UserName
}

type ArticleResponse = ResponseType<'article', Article>
type ArticleListResponse = ResponseTypes<{
  articles: Article[]
  articlesCount: number
}>

export const articleRepository = (axios: NuxtAxiosInstance) => ({
  getArticle(slug: Slug): ArticleResponse {
    return axios.$get(`/api/articles/${slug}`)
  },
  getArticleList({
    tag,
    author,
    favorited,
    limit = LIMIT_LIST_ITEM,
    offset = 0,
  }: ArticleListRequest = {}): ArticleListResponse {
    const defaultParam = {
      ...(tag && { tag }),
      ...(author && { author }),
      ...(favorited && { favorited }),
    }

    return axios.$get('/api/articles', {
      params: { ...defaultParam, limit, offset },
    })
  },
  getFeedArticleList({
    limit = LIMIT_LIST_ITEM,
    offset = 0,
  }: FeedArticleListRequest = {}): ArticleListResponse {
    return axios.$get('/api/articles/feed', {
      params: {
        limit,
        offset,
      },
    })
  },
  createArticle(payload: CreateArticleRequest): ArticleResponse | CustomErrors {
    return axios.$post('/api/articles', { article: payload })
  },
  updateArticle(request: UpdateArticleRequest): ArticleResponse | CustomErrors {
    return axios.$put(`/api/articles/${request.slug}`, { article: request.payload })
  },
  deleteArticle(slug: Slug) {
    return axios.$delete(`/api/articles/${slug}`)
  },
  favoriteArticle(slug: Slug): ArticleResponse {
    return axios.$post(`/api/articles/${slug}/favorite`)
  },
  unFavoriteArticle(slug: Slug): ArticleResponse {
    return axios.$delete(`/api/articles/${slug}/favorite`)
  },
})

export type ArticleRepository = ReturnType<typeof articleRepository>
