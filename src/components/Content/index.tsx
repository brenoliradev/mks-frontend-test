import { Container, ContentWrapper } from './styles'
import { useFetch } from '../../hooks'
import { useEffect, useMemo } from 'react'
import { ProductProps } from '../../typings/api'
import ShopCard from '../ShopCard'

type ProductReturn = { count: number; products: ProductProps[] }

const Content = () => {
  const { callFetch, isLoading, myRes } = useFetch<ProductReturn>({
    url: 'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC',
  })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => callFetch(), [])

  const mapResult = useMemo(
    () =>
      myRes &&
      myRes?.products?.map(({ brand, description, id, name, price, photo }) => (
        <ShopCard
          key={id}
          id={id}
          brand={brand}
          description={description}
          photo={photo}
          name={name}
          price={price}
        />
      )),
    [myRes],
  )

  return (
    <Container>
      {isLoading && myRes ? (
        <></>
      ) : (
        <ContentWrapper>{mapResult}</ContentWrapper>
      )}
    </Container>
  )
}

export default Content
