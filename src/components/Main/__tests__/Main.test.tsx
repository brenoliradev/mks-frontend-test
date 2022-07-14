import { render } from '@testing-library/react'

import Main from '../'

jest.mock('../../Navbar', () => ({ Navbar: () => 'mocked nav' }))
jest.mock('../../Content', () => ({ Content: () => 'mocked content' }))
jest.mock('../../Footer', () => ({ Footer: () => 'mocked footer' }))

describe('<Main />', () => {
  it('should render the main', () => {
    render(<Main />)
  })

  it('should render navbar, content and footer', () => {
    const { container } = render(<Main />)
    expect(container).toMatchInlineSnapshot(`
      <main>
        mocked nav
        mocked content
        mocked footer
      </main>
    `)
  })
})
