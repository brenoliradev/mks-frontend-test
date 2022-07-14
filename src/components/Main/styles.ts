import styled from 'styled-components'

export const Container = styled.main`
  background-color: #f9f9f9;
  color: #000;
  width: 100%;
  min-height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-template-areas:
    'navbar'
    'main'
    'footer';
`
