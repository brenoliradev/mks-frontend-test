import { render, screen } from '@testing-library/react'

import Footer from '..'

describe('<Footer />', () => {
  it('should render the footer text', () => {
    render(<Footer />)

    expect(
      screen.getByText(/MKS sistemas © Todos os direitos reservados/i),
    ).toBeInTheDocument()
  })

  it('should render p correctly', () => {
    const { container } = render(<Footer />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Footer />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#EEE' })
  })
})
