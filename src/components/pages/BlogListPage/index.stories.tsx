import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { BlogListPage } from '.'

export default {
  title: 'Pages/BlogListPage',
  component: BlogListPage,
} as ComponentMeta<typeof BlogListPage>

const Template: ComponentStory<typeof BlogListPage> = () => <BlogListPage />

export const Default = Template.bind({})
