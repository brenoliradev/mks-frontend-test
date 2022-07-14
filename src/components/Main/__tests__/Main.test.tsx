import { render, screen } from '@testing-library/react'

import Main from '..'

describe('<Main />', () => {
  it('should render the main', () => {
    render(<Main />)
  })

  it('should render H1 correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#F9F9F9' })
  })
})
