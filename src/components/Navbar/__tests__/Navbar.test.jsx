import { render, screen } from '@testing-library/react'

import { Navbar } from '..'

describe('<Navbar />', () => {
  it('should render all the Navbar text', () => {
    render(<Navbar />)
  })

  it('should render logo correctly', () => {
    const { container } = render(<Navbar />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Navbar />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#0f52ba' })
  })
})
