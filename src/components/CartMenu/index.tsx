import { ReactNode, useEffect, useState } from 'react'
import {
  CardTitle,
  CartWrapper,
  CloseButton,
  FinishButton,
  Overlay,
  TitleWrapper,
  Wrapper,
} from './styles'
import CartContent from '../CartContent'

interface Props {
  children?: ReactNode
  isOpen: boolean
  close: () => void
}

const CartMenu = ({ isOpen, close }: Props) => {
  const [shouldRender, setRender] = useState(isOpen)

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
            <FinishButton>Finalizar Compra</FinishButton>
          </CartWrapper>
        </Wrapper>
      )}
    </>
  )
}

export default CartMenu
