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
  readonly id: string | undefined
}

const getPost = async ({
  postID,
}: {
  readonly postID: number
}): Promise<Post> => {
  const response = await axios.get(`${POSTS_URL}/${postID}`)

  return response.data
}

export const useGetPost = ({ id }: GetPostParams) => {
  const postID =
    typeof id === 'string' && !isNaN(Number.parseInt(id))
      ? Number.parseInt(id)
      : null

  return useQuery(
    ['GetPost', id],
    async () => getPost({ postID: postID as number }),
    {
      refetchOnWindowFocus: false,
      enabled: postID != null,
    },
  )
}
