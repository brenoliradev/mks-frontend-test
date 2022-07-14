import Image from 'next/image'
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

const ShopCard = ({ description, name, photo, price }: ProductProps) => (
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
    <Button>
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

export default ShopCard
