/* istanbul ignore file */
import { Main } from 'components'
import { cartStore } from '../store/store'
import { Provider } from 'react-redux'

export default function Home() {
  return (
    <Provider store={cartStore}>
      <Main />
    </Provider>
  )
}
