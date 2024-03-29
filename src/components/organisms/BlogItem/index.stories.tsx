import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { BlogItem } from '.'

export default {
  title: 'Organisms/BlogItem',
  component: BlogItem,
} as ComponentMeta<typeof BlogItem>

const Template: ComponentStory<typeof BlogItem> = (args) => (
  <BlogItem {...args} />
)

export const Default = Template.bind({})
Default.args = {
  id: 1,
  title: 'This is the blog title',
  body: 'This is the blog contents.',
}
