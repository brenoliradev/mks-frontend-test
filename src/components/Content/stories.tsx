import { Story, Meta } from '@storybook/react'

import Content from '.'

export default {
  component: Content,
  title: 'Content',
} as Meta

export const Basic: Story = () => <Content />
