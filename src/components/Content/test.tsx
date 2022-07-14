import { render, screen } from '@testing-library/react'

import Content from '.'

describe('<Content />', () => {
  it('should render the Content text', () => {
    render(<Content />)
  })

  it('should render container correctly', () => {
    const { container } = render(<Content />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Content />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#EEE' })
  })
})
