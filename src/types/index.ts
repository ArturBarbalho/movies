export type topRated = {
    page:string
    results:results[]
    total_results:number
    total_pages:number
  }
export type results={
  poster_path:string
  adult:boolean
  overview:string
  release_date:string
  genre_ids:number[]
  id:number
  original_title: string
  original_language: string
  title: string
  backdrop_path: string
  popularity: number
  vote_count: number
  video: boolean
  vote_average: number
  name:string
  first_air_date:string
}

export type genres = {
  id:number
  name:string
}

export type reviews = {
author: string
author_details:autorDetails
content: string
created_at: string
id: string
updated_at: string
url: string
}

export type autorDetails =
 {
  name: string
  username: string
  avatar_path: string
  rating: boolean
}