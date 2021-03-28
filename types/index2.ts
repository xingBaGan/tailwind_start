export type timestamp = string
export type Array = []
export interface users {
  id: string
  user_name: string
  password: string
  email: string
  phone_number: string
  last_visit_at: timestamp
  registered_at: timestamp
  avater: string
  bio: string
  posts: Array
  score: number
  is_admin: boolean
  threads: Array
  followers: Array
  is_tourist: boolean
}

export interface threads {
  id: string
  last_post_id: string
  user_id: string
  first_post_id: string

  forum_id: string
  last_post_at: timestamp
  published_at: timestamp
  slug: string
  title: string
  posts: Array
  contributors: Array
}


export interface posts {
  id: string
  edited: string
  publishedAt: timestamp
  content: string
  thread_id: string
  user_id: string
  replys: Array
  likes: Array
}

export interface logs {
  id: string
  at: timestamp
  by: string
  moderated: boolean
}

export interface forums {
  id: string
  last_post_id: string
  slug: string
  threads: Array
  category_id: string
  game_id: string
  posts: Array
}

export interface games {
  id: string
  bg_images: string
  images: Array
  videos: Array
  name: string
  description: string
  people_and_network: string
  developer: string
  publisher: string
  lang: Array
  platforms: Array
  tags: Array
  item_provider: Array
  evaluations: Array
}

export interface platforms {
  id: string
  name: string
}
export interface tags {
  id: string
  name: string
}

export interface evaluations {
  id: string
  post_id: string
  star: number
}

export interface categorys {
  id: string
  name: string
  slug: string
  forums: Array
}

export interface complaints {
  id: string
  user_id: string
  post_id: string
  reason: string
  comfirmed_by: string
  comfirmed_at: timestamp
  status: string
}


