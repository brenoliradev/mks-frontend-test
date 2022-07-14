import styled from 'styled-components'

export const Wrapper = styled.main`
  width: 100%;
  min-height: 300px;
  max-width: 280px;
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;

  padding-top: 18px;

  @media (max-width: 400px) {
    padding-top: 4px;
    min-height: 325px;
  }
`

export const ImageWrapper = styled.section`
  width: 138px;
`

export const InfoWrapper = styled.section`
  width: 100%;
  padding-left: 14px;
  padding-right: 12px;
  min-height: 36px;

  margin: 10px 0 8px;

  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    padding: 0 9px;
    margin: 6px 0 8px;
  }
`

export const NameTag = styled.p`
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
  text-align: left;

  color: #2c2c2c;

  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 16px;
  }
`

export const PriceTag = styled.p`
  background: #373737;
  border-radius: 5px;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 15px;
  line-height: 15px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 6px;

  color: #ffffff;
`

export const Description = styled.p`
  font-family: 'Montserrat';
  font-weight: 300;
  font-size: 10px;
  line-height: 12px;

  padding: 0 12px;
  margin-top: 2px;
  margin-bottom: 4px;

  color: #2c2c2c;
`

export const Button = styled.button`
  background: #0f52ba;
  border-radius: 0px 0px 8px 8px;
  width: 100%;
  height: 34px;
  inline: none;
  border: none;

  margin-top: auto;

  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  gap: 14px;
  justify-content: center;
  align-items: center;

  color: #ffffff;

  cursor: pointer;

  background-position: center;
  transition: background 0.7s;

  :hover {
    background: #5785ce radial-gradient(circle, transparent 1%, #0f52ba 1%)
      center/15000%;
  }
  :active {
    background-color: #5785ce;
    background-size: 100%;
    transition: background 0s;
  }
`
