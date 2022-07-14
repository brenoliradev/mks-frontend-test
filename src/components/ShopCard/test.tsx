import { render } from '@testing-library/react'

import ShopCard from '.'

describe('<ShopCard />', () => {
  it('should render the heading', () => {
    render(
      <ShopCard
        brand="testing"
        description="testing"
        id={1}
        name="testing"
        photo="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone12x64.webp"
        price={111}
      />,
    )
  })
})
