import { Story, Meta } from '@storybook/react'

import ShopCard from '.'

export default {
  component: ShopCard,
  title: 'ShopCard',
} as Meta

export const Basic: Story = () => <ShopCard />
