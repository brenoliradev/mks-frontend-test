import Image from 'next/image'
import { useState } from 'react'
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
  const [shopCart, setShopcart] = useState<number>(0)

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
          <CartNumber>{shopCart}</CartNumber>
        </CartWrapper>
      </NavContent>
    </NavWrapper>
  )
}

export default Navbar
