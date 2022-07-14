import { Story, Meta } from '@storybook/react'

import { Navbar } from '.'

export default {
  component: Navbar,
  title: 'Navbar',
} as Meta

export const Basic: Story = () => <Navbar />
