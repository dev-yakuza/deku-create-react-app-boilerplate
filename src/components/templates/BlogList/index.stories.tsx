import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { BlogList } from '.'

export default {
  title: 'Templates/BlogList',
  component: BlogList,
} as ComponentMeta<typeof BlogList>

const Template: ComponentStory<typeof BlogList> = (args) => (
  <BlogList {...args} />
)

export const Default = Template.bind({})

export const WithData = Template.bind({})
WithData.args = {
  posts: [
    { userId: 1, id: 1, title: 'blog title 1', body: 'blog contents 1' },
    { userId: 1, id: 2, title: 'blog title 2', body: 'blog contents 2' },
    { userId: 1, id: 3, title: 'blog title 3', body: 'blog contents 3' },
    { userId: 1, id: 4, title: 'blog title 4', body: 'blog contents 4' },
    { userId: 1, id: 5, title: 'blog title 5', body: 'blog contents 5' },
    { userId: 1, id: 6, title: 'blog title 6', body: 'blog contents 6' },
    { userId: 1, id: 7, title: 'blog title 7', body: 'blog contents 7' },
    { userId: 1, id: 8, title: 'blog title 8', body: 'blog contents 8' },
  ],
}
