import { render } from '@testing-library/react'
import mockPostData from 'api/posts/mockData/post.json'
import mockPostsData from 'api/posts/mockData/posts.json'
import { createMemoryHistory } from 'history'
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'
import {
  mockBlogListPage,
  mockHeader,
  mockPageContainer,
  mockPostDetailPage,
} from 'utils/test'

import App from './App'

jest.mock('api/posts', () => ({
  useGetPosts: () => mockPostsData,
  useGetPost: () => mockPostData,
}))

describe('<App />', () => {
  test('/', () => {
    const history = createMemoryHistory({ initialEntries: ['/'] })

    render(
      <HistoryRouter history={history}>
        <App />
      </HistoryRouter>,
    )

    expect(mockPageContainer.mock.calls.length).toBe(1)
    expect(mockHeader.mock.calls.length).toBe(1)

    expect(mockBlogListPage.mock.calls.length).toBe(1)
    expect(mockPostDetailPage.mock.calls.length).toBe(0)
  })

  test('/posts/:id', () => {
    const history = createMemoryHistory({ initialEntries: ['/posts/1'] })

    render(
      <HistoryRouter history={history}>
        <App />
      </HistoryRouter>,
    )

    expect(mockPageContainer.mock.calls.length).toBe(1)
    expect(mockHeader.mock.calls.length).toBe(1)

    expect(mockBlogListPage.mock.calls.length).toBe(0)
    expect(mockPostDetailPage.mock.calls.length).toBe(1)
  })
})
