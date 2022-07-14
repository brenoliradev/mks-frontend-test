import styled from 'styled-components'

export const Wrapper = styled.section`
  backdrop-filter: blur(4px);
  position: fixed;
  z-index: 3;
  inset: 0;
`

export const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  opacity: 0.7;
  position: absolute;
  cursor: pointer;
`

export const CartWrapper = styled.div`
  z-index: 4;
  right: 0;
  position: absolute;
  background: #0f52ba;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CardTitle = styled.h2`
  font-weight: 700;
  font-size: 27px;
  line-height: 33px;

  text-align: left;

  margin-top: 36px;
  margin-left: 47px;

  color: #ffffff;
`

export const CloseButton = styled.button`
  border: none;
  border-radius: 100%;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  font-size: 28px;
  line-height: 15px;
  cursor: pointer;

  margin-right: 22px;

  color: #ffffff;

  :hover {
    opacity: 0.9;
  }
`

export const FinishButton = styled.button`
  height: 97px;
  width: 100%;
  background: #000;
  outline: none;

  cursor: pointer;

  border: none;

  background-position: center;
  transition: background 0.7s;

  font-weight: 700;
  font-size: 28px;
  line-height: 15px;

  color: #ffffff;

  :hover {
    background: #0c0c0c radial-gradient(circle, transparent 1%, #020202 1%)
      center/15000%;
  }
  :active {
    background-color: #0c0c0c;
    background-size: 100%;
    transition: background 0s;
  }
`
