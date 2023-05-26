import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { PostDetailPage } from '.'

export default {
  title: 'Pages/PostDetailPage',
  component: PostDetailPage,
} as ComponentMeta<typeof PostDetailPage>

const Template: ComponentStory<typeof PostDetailPage> = () => <PostDetailPage />

export const NoData = Template.bind({})

export const WithData = Template.bind({})
WithData.story = {
  parameters: {
    reactRouter: {
      routePath: '/posts/:id',
      routeParams: { id: '1' },
    },
  },
}
