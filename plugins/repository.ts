import { Repository } from '@/api'
declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $repository: Repository
  }
  interface Context {
    $repository: Repository
  }
}

import { Plugin } from '@nuxt/types'


import createRepository from '@/api/createRepository'

const repository: Plugin = (ctx, inject) => {
  const repositoryWithAxios = createRepository(ctx)

  inject('repository', repositoryWithAxios)
}

export default repository
