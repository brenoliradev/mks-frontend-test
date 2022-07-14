import { ContentWrapper } from './styles'
import { useFetch } from '../../hooks'
import { useEffect, useMemo } from 'react'
import { ProductProps } from '../../typings/api'

type ProductReturn = { count: number; products: ProductProps[] }

const Content = () => {
  const { callFetch, isLoading, myRes } = useFetch<ProductReturn>({
    url: 'https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC',
  })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => callFetch(), [])

  const mapResult = useMemo(
    () =>
      myRes &&
      myRes?.products?.map(({ brand, description, id, name, price }) => (
        <div key={id}>{name}</div>
      )),
    [myRes],
  )

  return (
    <ContentWrapper>
      <h1>{isLoading && myRes ? 'Loading' : mapResult}</h1>
    </ContentWrapper>
  )
}

export default Content
