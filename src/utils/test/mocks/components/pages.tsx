const mockBlogListPage = jest.fn()
const mockPostDetailPage = jest.fn()

jest.mock('components/pages', () => {
  const {
    BlogListPage: BlogListPageComponent,
    PostDetailPage: PostDetailPageComponent,
    ...rest
  } = jest.requireActual('components/pages')

  const BlogListPage = (props: typeof BlogListPageComponent) => {
    mockBlogListPage(props)
    return <BlogListPageComponent {...props} />
  }

  const PostDetailPage = (props: typeof PostDetailPageComponent) => {
    mockPostDetailPage(props)
    return <PostDetailPageComponent {...props} />
  }

  return {
    BlogListPage,
    PostDetailPage,
    ...rest,
  }
})

export { mockBlogListPage, mockPostDetailPage }
