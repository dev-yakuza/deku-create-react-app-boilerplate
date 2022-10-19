import { render, screen, fireEvent } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import {
  BrowserRouter,
  unstable_HistoryRouter as HistoryRouter,
} from 'react-router-dom'

import { Link } from '.'

describe('<Link />', () => {
  it('Rendered well', async () => {
    const { container } = render(
      <BrowserRouter>
        <Link to="/posts/1">test link</Link>
      </BrowserRouter>,
    )

    expect(screen.queryByText('test link')).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })

  it('Go to the link URL when the link is clicked', () => {
    const mockPush = jest.fn()
    const history = createMemoryHistory({ initialEntries: ['/'] })
    history.push = mockPush

    render(
      <HistoryRouter history={history}>
        <Link to="/posts/1">test link</Link>
      </HistoryRouter>,
    )

    fireEvent.click(screen.getByText('test link'))
    expect(mockPush.mock.calls[0][0].pathname).toBe('/posts/1')
  })
})
