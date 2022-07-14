import { render, screen } from '@testing-library/react'

import CartMenu from '.'

const mockedClose = () => {
  return false
}

describe('<CartMenu />', () => {
  it('should render with false isOpen', () => {
    render(<CartMenu isOpen={false} close={mockedClose} />)
  })

  it('should render with true isOpen', () => {
    render(<CartMenu isOpen={true} close={mockedClose} />)

    expect(
      screen.getByRole('heading', { name: /Carrinho de Compras/i }),
    ).toBeInTheDocument()
  })
})
