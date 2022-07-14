import { Story, Meta } from '@storybook/react'

import ShopCard from '.'

export default {
  component: ShopCard,
  title: 'ShopCard',
} as Meta

export const Basic: Story = () => (
  <ShopCard
    brand="a brand testing"
    description="a desc testing"
    id={1}
    name="a name testing"
    photo="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone12x64.webp"
    price={111}
  />
)
