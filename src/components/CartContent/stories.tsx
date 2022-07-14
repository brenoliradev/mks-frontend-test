import { Story, Meta } from '@storybook/react'

import CartContent from '.'

export default {
  component: CartContent,
  title: 'CartContent',
} as Meta

export const Basic: Story = () => <CartContent />
