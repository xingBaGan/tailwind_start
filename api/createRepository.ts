import { Context } from '@nuxt/types'
import {
  articleRepository,
  threadRepository,
  ArticleRepository,
  ThreadRepository
} from '@/api'

import{
  forumRepository,
  ForumRepository
} from '@/api/main'
import { ErrorType } from '@/constants'

export type Repository = {
  article: ArticleRepository,
  thread:ThreadRepository,
  forum:ForumRepository
};

/**
 * @see https://axios.nuxtjs.org
 * @see https://github.com/gothinkster/realworld/tree/3155494efe68432772157de38a90c49b3698897f/api
 */
const createRepository = ({ app, $axios, redirect }: Context): Repository => {
  $axios.onError((error) => {
    if (!error.response) {
      return
    }

    const code = error.response.status

    if (code === ErrorType.Unprocessable) {
      return Promise.reject(error.response.data.errors)
    }

    if (code === ErrorType.Unauthorized) {
      redirect('/login')

      return
    }

    if (code === ErrorType.Forbidden) {
      app?.router?.back()

      return
    }

    if (code === ErrorType.NotFound) {
      redirect('/')
    }
  })

  return {
    article: articleRepository($axios),
    forum:forumRepository($axios),
    thread:threadRepository($axios),
  }
}

export default createRepository
