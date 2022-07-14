import { Story, Meta } from '@storybook/react'

import CartMenu from '.'

export default {
  component: CartMenu,
  title: 'CartMenu',
} as Meta

export const Basic: Story = () => <CartMenu isOpen={true} close={() => false} />
