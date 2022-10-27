import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from '@mui/material'
import { withRouter } from 'storybook-addon-react-router-v6'
import { theme } from '../src/utils/theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
})

export const decorators = [
  (Story) => (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </QueryClientProvider>
  ),
  withRouter,
]
