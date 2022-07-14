import { render, screen } from '@testing-library/react'

import Content from '.'

describe('<Content />', () => {
  it('should render the heading', () => {
    render(<Content />)

    expect(
      screen.getByRole('heading', { name: /Content/i })
    ).toBeInTheDocument()
  })
})
