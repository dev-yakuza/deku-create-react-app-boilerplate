const mockPageContainer = jest.fn()
const mockPageLoading = jest.fn()

jest.mock('components/atoms', () => {
  const {
    PageLoading: PageLoadingComponent,
    PageContainer: PageContainerComponent,
    ...rest
  } = jest.requireActual('components/atoms')

  const PageContainer = (props: typeof PageContainerComponent) => {
    mockPageContainer(props)
    return <PageContainerComponent {...props} />
  }

  const PageLoading = (props: typeof PageLoadingComponent) => {
    mockPageLoading(props)
    return <PageLoadingComponent {...props} />
  }

  return {
    PageContainer,
    PageLoading,
    ...rest,
  }
})

export { mockPageContainer, mockPageLoading }
