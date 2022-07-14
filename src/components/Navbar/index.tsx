import Image from 'next/image'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'
import { ProductProps } from 'typings/api'
import {
  CartNumber,
  CartWrapper,
  LogoWrapper,
  NavContent,
  NavSubtitle,
  NavTitle,
  NavWrapper,
} from './styles'

const Navbar = () => {
  const cartItems: ProductProps[] = useSelector(
    (state: RootState) => state.rootReducer.cart,
  )

  return (
    <NavWrapper>
      <NavContent>
        <LogoWrapper>
          <NavTitle>MKS</NavTitle>
          <NavSubtitle>Sistemas</NavSubtitle>
        </LogoWrapper>
        <CartWrapper>
          <Image
            width={19}
            height={18}
            alt="A Shopcart Icon"
            src="/img/shopcart.svg"
          />
          <CartNumber>{cartItems.length}</CartNumber>
        </CartWrapper>
      </NavContent>
    </NavWrapper>
  )
}

export default Navbar
