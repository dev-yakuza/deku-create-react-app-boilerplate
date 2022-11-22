import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import type { Post } from 'types'

const POSTS_URL = `${process.env.REACT_APP_API_SERVER}/posts`

const getPosts = async (): Promise<ReadonlyArray<Post>> => {
  const response = await axios.get(POSTS_URL)

  return response.data
}

export const useGetPosts = () => {
  return useQuery(['GetPosts'], async () => getPosts(), {
    refetchOnWindowFocus: false,
  })
}

interface GetPostParams {
  readonly id: number | null
}
const getPost = async ({ id }: GetPostParams): Promise<Post> => {
  const response = await axios.get(`${POSTS_URL}/${id}`)

  return response.data
}

export const useGetPost = ({ id }: GetPostParams) => {
  return useQuery(['GetPost', id], async () => getPost({ id }), {
    refetchOnWindowFocus: false,
    enabled: id != null,
  })
}
