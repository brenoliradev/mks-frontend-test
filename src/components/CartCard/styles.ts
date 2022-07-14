import styled from 'styled-components'

export const Wrapper = styled.main`
  background: #ffffff;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  width: 100%;
  max-width: 100%;
  min-height: 95px;
  height: 95px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.2rem 0 0.8rem;
`

export const ContentWrapper = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ProductName = styled.p`
  font-family: 'Montserrat';
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  width: 33%;
  margin: 0 8px;

  color: #2c2c2c;

  @media (max-width: 600px) {
    display: none;
  }
`

export const QuantityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 600px) {
    margin: 0 12px;
  }
`

export const QuantityTag = styled.p`
  font-family: 'Montserrat';
  font-size: 12px;
  line-height: 18px;

  color: #000000;
`

export const QuantityWrapper = styled.div`
  background: #ffffff;
  border: 0.3px solid #bfbfbf;
  border-radius: 4px;
  width: 90px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    width: 70px;
  }
`

export const SymbolWrapper = styled.button`
  font-family: 'Montserrat';
  font-size: 16px;
  font-weight: 600;
  line-height: 18px;
  padding: 3px;
  width: 100%;

  border: none;
  cursor: pointer;
  background: #fff;

  color: #000000;
`

export const NumberWrapper = styled.p`
  font-family: 'Montserrat';
  font-size: 14px;
  line-height: 18px;
  padding: 3px;

  width: 44px;
  border-left: 0.2px solid #bfbfbf;
  border-right: 0.2px solid #bfbfbf;

  color: #000000;
`

export const PriceTag = styled.p`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  margin-left: 12px;

  color: #000000;

  @media (max-width: 600px) {
    margin-left: 4px;
    font-size: 16px;
  }
`

export const DeleteButton = styled.button`
  background: #000000;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Montserrat';

  position: relative;
  bottom: 4.3rem;
  left: 2.2rem;
  z-index: 5;

  font-weight: 600;
  font-size: 14px;
  line-height: 17px;

  color: #ffffff;
`
