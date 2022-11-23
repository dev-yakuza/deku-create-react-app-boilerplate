import { useGetPost } from 'api/posts'
import { BlogDetail } from 'components/templates'
import { useParams } from 'react-router-dom'

export const PostDetail = () => {
  const { id } = useParams()
  const postID =
    typeof id === 'string' && !isNaN(Number.parseInt(id))
      ? Number.parseInt(id)
      : null
  const { data } = useGetPost({ id: postID })

  return <BlogDetail post={data} />
}
