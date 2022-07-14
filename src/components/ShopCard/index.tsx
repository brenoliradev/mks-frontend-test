import Image from 'next/image'
import { ProductProps } from 'typings/api'
import { Wrapper } from './styles'

const ShopCard = ({ description, name, photo, price }: ProductProps) => (
  <Wrapper>
    <Image
      width={300}
      height={300}
      src={photo}
      alt={description}
      objectFit="contain"
    />
    <p>{name}</p>
    <p>{price}</p>
    <p>{name}</p>
  </Wrapper>
)

export default ShopCard
