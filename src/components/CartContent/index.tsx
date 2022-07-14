import CartCard from 'components/CartCard'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { StoreProps } from 'store/cartSlice'
import { RootState } from 'store/store'
import * as S from './styles'

const CartContent = () => {
  const cartItems: StoreProps[] = useSelector(
    (state: RootState) => state.rootReducer.cart,
  )

  const mappedCart = useMemo(
    () =>
      cartItems?.length > 0 &&
      cartItems?.map(
        ({ id, brand, description, name, photo, price, quantity }) => (
          <CartCard
            key={id}
            brand={brand}
            description={description}
            name={name}
            photo={photo}
            id={id}
            price={price}
            quantity={quantity}
          />
        ),
      ),
    [cartItems],
  )

  return <S.Wrapper className="custom-scrollbar">{mappedCart}</S.Wrapper>
}

export default CartContent
