import styled from 'styled-components'

export const Wrapper = styled.main`
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
  gap: 28px;
  padding: 70px 60px 3rem 47px;

  @media (max-width: 600px) {
    padding: 15px 12px;
  }
`

export const EmptyMessage = styled.h2`
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;

  margin: 0 auto;

  color: #ffffff;
`
