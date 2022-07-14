import { render, screen } from '@testing-library/react'

import ShopCard from '.'

describe('<ShopCard />', () => {
  it('should render the heading', () => {
    render(<ShopCard />)

    expect(
      screen.getByRole('heading', { name: /ShopCard/i })
    ).toBeInTheDocument()
  })
})
