import { render, screen, fireEvent } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { BrowserRouter, Router } from 'react-router-dom'
import { mockAppBar } from 'utils/test'

import { Header } from '.'

describe('<Header />', () => {
  it('Rendered well', async () => {
    const { container } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    )

    const appBar = mockAppBar.mock.calls[0][0]
    expect(appBar.position).toBe('fixed')
    expect(appBar.elevation).toBe(4)
    expect(appBar.style).toEqual({
      backgroundColor: '#FFF',
    })

    const toolbar = appBar.children
    expect(toolbar.type.name).toBe('Toolbar')
    expect(toolbar.props.sx).toEqual({ flexWrap: 'wrap' })

    const appTitleLink = toolbar.props.children
    expect(appTitleLink.type.render.displayName).toBe('Styled(Link)')
    expect(appTitleLink.props.to).toBe('/')

    const appTitle = appTitleLink.props.children
    expect(appTitle.type.name).toBe('Typography')
    expect(appTitle.props.variant).toBe('h6')
    expect(appTitle.props.color).toBe('inherit')
    expect(appTitle.props.noWrap).toBe(true)
    expect(appTitle.props.sx).toEqual({ flexGrow: 1 })
    expect(appTitle.props.children).toBe('Blog App')

    expect(container).toMatchSnapshot()
  })

  it('Go to the root page when the app title is clicked', () => {
    const mockPush = jest.fn()
    const history = createMemoryHistory({ initialEntries: ['/posts/1'] })
    history.push = mockPush

    render(
      <Router location={history.location} navigator={history}>
        <Header />
      </Router>,
    )

    fireEvent.click(screen.getByText('Blog App'))
    expect(mockPush.mock.calls[0][0].pathname).toBe('/')
  })
})
