import type { ComponentStory, ComponentMeta } from '@storybook/react'

import { CreateBlogPostPage } from '.'

export default {
  title: 'Pages/CreateBlogPostPage',
  component: CreateBlogPostPage,
} as ComponentMeta<typeof CreateBlogPostPage>

const Template: ComponentStory<typeof CreateBlogPostPage> = () => (
  <CreateBlogPostPage />
)

export const Default = Template.bind({})
