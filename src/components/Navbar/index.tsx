import Image from 'next/image'
import { useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { ProductProps } from 'typings/api'
import CartMenu from '../CartMenu'
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
  const [cartIsOpen, setCartIsOpen] = useState<boolean>(false)
  const cartItems: ProductProps[] = useSelector(
    (state: RootState) => state.rootReducer.cart,
  )

  const toggleMenu = useCallback(() => setCartIsOpen(!cartIsOpen), [cartIsOpen])
  const close = useCallback(() => setCartIsOpen(false), [])

  return (
    <>
      <NavWrapper>
        <NavContent>
          <LogoWrapper>
            <NavTitle>MKS</NavTitle>
            <NavSubtitle>Sistemas</NavSubtitle>
          </LogoWrapper>
          <CartWrapper onClick={toggleMenu}>
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
      <CartMenu isOpen={cartIsOpen} close={close} />
    </>
  )
}

export default Navbar
