import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 135px);
  background: #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContentWrapper = styled.div`
  grid-area: main;
  width: 90%;
  max-width: 938px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 23px;
  grid-row-gap: 31px;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 12px;
    grid-row-gap: 16px;
  }

  animation: fadeIn 0.5s;
`
