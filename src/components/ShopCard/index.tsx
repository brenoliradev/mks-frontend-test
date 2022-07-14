import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { addToCart, StoreProps } from '../../store/cartSlice'
import { ProductProps } from 'typings/api'
import {
  Button,
  Description,
  ImageWrapper,
  InfoWrapper,
  NameTag,
  PriceTag,
  Wrapper,
} from './styles'

const ShopCard = ({
  description,
  name,
  photo,
  price,
  id,
  brand,
}: ProductProps) => {
  const dispatch = useDispatch()
  const add = () => {
    const item: StoreProps = {
      id: id,
      name: name,
      price: price,
      brand: brand,
      photo: photo,
      quantity: 1,
      description: description,
    }
    dispatch(addToCart(item))
  }

  return (
    <Wrapper>
      <ImageWrapper>
        <Image
          width={300}
          height={300}
          src={photo}
          alt={`${name} photo`}
          objectFit="contain"
        />
      </ImageWrapper>
      <InfoWrapper>
        <NameTag>{name}</NameTag>
        <PriceTag>R${price?.toString().split('.00')[0]}</PriceTag>
      </InfoWrapper>
      <Description>{description}</Description>
      <Button onClick={add}>
        {' '}
        <Image
          width={14}
          height={12}
          alt="A Shoping bag Icon"
          src="/img/shopping-bag.svg"
        />
        COMPRAR
      </Button>
    </Wrapper>
  )
}
export default ShopCard
