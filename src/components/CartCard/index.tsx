import Image from 'next/image'
import { useDispatch } from 'react-redux'
import {
  batchRemove,
  decrementQuantity,
  incrementQuantity,
  StoreProps,
} from '../../store/cartSlice'
import {
  ContentWrapper,
  DeleteButton,
  NumberWrapper,
  PriceTag,
  ProductName,
  QuantityContainer,
  QuantityTag,
  QuantityWrapper,
  SymbolWrapper,
  Wrapper,
} from './styles'

const CartCard = ({ id, name, photo, price, quantity }: StoreProps) => {
  const dispatch = useDispatch()

  const increment = () => dispatch(incrementQuantity({ id: id.toString() }))
  const decrement = () => dispatch(decrementQuantity({ id: id.toString() }))
  const clearProduct = () => dispatch(batchRemove({ ids: [id.toString()] }))

  return (
    <Wrapper>
      <ContentWrapper>
        <Image src={photo} objectFit={'contain'} width={90} height={90} />
        <ProductName>{name}</ProductName>
        <QuantityContainer>
          <QuantityTag>Qtd:</QuantityTag>
          <QuantityWrapper>
            <SymbolWrapper onClick={decrement}>-</SymbolWrapper>
            <NumberWrapper>{quantity}</NumberWrapper>
            <SymbolWrapper onClick={increment}>+</SymbolWrapper>
          </QuantityWrapper>
        </QuantityContainer>
        <PriceTag>R${price.toString().split('.00')[0]}</PriceTag>
      </ContentWrapper>
      <DeleteButton onClick={clearProduct}>X</DeleteButton>
    </Wrapper>
  )
}

export default CartCard
