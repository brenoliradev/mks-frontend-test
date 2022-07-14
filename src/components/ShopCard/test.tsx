import { render } from '@testing-library/react'

import ShopCard from '.'

describe('<ShopCard />', () => {
  it('should render the heading', () => {
    render(
      <ShopCard
        brand="a brand testing"
        description="a desc testing"
        id={1}
        name="a name testing"
        photo="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone12x64.webp"
        price={111}
      />,
    )
  })

  it('should render logo correctly', () => {
    const { container } = render(
      <ShopCard
        brand="a brand testing"
        description="a desc testing"
        id={1}
        name="a name testing"
        photo="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone12x64.webp"
        price={111}
      />,
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
