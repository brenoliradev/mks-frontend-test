import { ReactNode, useEffect, useMemo, useState } from 'react'
import {
  CardTitle,
  CartWrapper,
  CloseButton,
  FinishButton,
  Overlay,
  TitleWrapper,
  TotalContainer,
  TotalTag,
  Wrapper,
} from './styles'
import CartContent from '../CartContent'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'
import { StoreProps } from 'store/cartSlice'

interface Props {
  children?: ReactNode
  isOpen: boolean
  close: () => void
}

const CartMenu = ({ isOpen, close }: Props) => {
  const [shouldRender, setRender] = useState(isOpen)
  const cartItems: StoreProps[] = useSelector(
    (state: RootState) => state.rootReducer.cart,
  )

  const totalPrice = useMemo(
    () =>
      cartItems.length > 0 &&
      cartItems.reduce(
        (a, b) => a + +b.price.toString().split('.00')[0] * b.quantity,
        0,
      ),
    [cartItems],
  )

  useEffect(() => {
    if (isOpen) setRender(true)
    if (!isOpen) setTimeout(() => setRender(false), 450)
  }, [isOpen])

  return (
    <>
      {shouldRender && (
        <Wrapper
          style={{
            animation: `${isOpen ? 'fadeIn' : 'fadeOut'} .5s`,
          }}
        >
          <Overlay onClick={close} />
          <CartWrapper
            style={{
              width: 'clamp(300px, 90vw, 600px)',
              animation: `${isOpen ? 'fromLeft' : 'toRight'} .5s`,
            }}
          >
            <TitleWrapper>
              <CardTitle>
                Carrinho
                <br />
                de compras
              </CardTitle>
              <CloseButton onClick={close}>X</CloseButton>
            </TitleWrapper>
            <CartContent />
            <TotalContainer>
              <TotalTag>Total:</TotalTag>
              <TotalTag>${totalPrice}</TotalTag>
            </TotalContainer>
            <FinishButton>Finalizar Compra</FinishButton>
          </CartWrapper>
        </Wrapper>
      )}
    </>
  )
}

export default CartMenu
