import { render } from '@testing-library/react'

import Navbar from '..'
import Provider from '../../../store/provider'

describe('<Navbar />', () => {
  it('should render all the Navbar text', () => {
    render(
      <Provider>
        <Navbar />
      </Provider>,
    )
  })

  it('should render logo correctly', () => {
    const { container } = render(
      <Provider>
        <Navbar />
      </Provider>,
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(
      <Provider>
        <Navbar />
      </Provider>,
    )

    expect(container.firstChild).toHaveStyle({ 'background-color': '#0f52ba' })
  })
})
