/* istanbul ignore file */
import Main from 'components/Main'
import ShopProvider from 'store/provider'

export default function Home() {
  return (
    <ShopProvider>
      <Main />
    </ShopProvider>
  )
}
