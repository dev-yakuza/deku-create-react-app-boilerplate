import type { ComponentStory, ComponentMeta } from '@storybook/react'

import { PostDetail } from '.'

export default {
  title: 'Pages/PostDetail',
  component: PostDetail,
} as ComponentMeta<typeof PostDetail>

const Template: ComponentStory<typeof PostDetail> = () => <PostDetail />

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
