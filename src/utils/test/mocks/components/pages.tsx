const mockBlogListPage = jest.fn()
const mockPostDetail = jest.fn()

jest.mock('components/pages', () => {
  const {
    BlogListPage: BlogListPageComponent,
    PostDetail: PostDetailComponent,
    ...rest
  } = jest.requireActual('components/pages')

  const BlogListPage = (props: typeof BlogListPageComponent) => {
    mockBlogListPage(props)
    return <BlogListPageComponent {...props} />
  }

  const PostDetail = (props: typeof PostDetailComponent) => {
    mockPostDetail(props)
    return <PostDetailComponent {...props} />
  }

  return {
    BlogListPage,
    PostDetail,
    ...rest,
  }
})

export { mockBlogListPage, mockPostDetail }
