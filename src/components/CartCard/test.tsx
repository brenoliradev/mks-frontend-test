import { render } from '@testing-library/react'

import CartCard from '.'

describe('<CartCard />', () => {
  it('should render the heading', () => {
    render(
      <CartCard
        brand="testing"
        description="testing"
        id={12}
        name="testing"
        photo="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone12x64.webp"
        price={1231}
        quantity={2}
      />,
    )
  })
})
