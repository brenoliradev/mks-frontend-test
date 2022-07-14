import { Story, Meta } from '@storybook/react'

import CartCard from '.'

export default {
  component: CartCard,
  title: 'CartCard',
} as Meta

export const Basic: Story = () => <CartCard />
