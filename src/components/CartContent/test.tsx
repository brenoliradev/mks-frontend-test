import { render, screen } from '@testing-library/react'

import CartContent from '.'

describe('<CartContent />', () => {
  it('should render the heading', () => {
    render(<CartContent />)

    expect(
      screen.getByRole('heading', { name: /CartContent/i }),
    ).toBeInTheDocument()
  })
})
