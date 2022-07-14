import { render } from '@testing-library/react'

import ShopCard from '.'
import ShopProvider from '../../store/provider'

describe('<ShopCard />', () => {
  it('should render the heading', () => {
    render(
      <ShopProvider>
        <ShopCard
          brand="a brand testing"
          description="a desc testing"
          id={1}
          name="a name testing"
          photo="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone12x64.webp"
          price={111}
        />
      </ShopProvider>,
    )
  })

  it('should render logo correctly', () => {
    const { container } = render(
      <ShopProvider>
        <ShopCard
          brand="a brand testing"
          description="a desc testing"
          id={1}
          name="a name testing"
          photo="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone12x64.webp"
          price={111}
        />
      </ShopProvider>,
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
