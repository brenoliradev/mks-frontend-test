import styled from 'styled-components'

export const NavWrapper = styled.header`
  background-color: #0f52ba;
  color: #fff;
  width: 100%;
  height: 101px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-area: navbar;
  padding-right: 88px;
  padding-left: 65px;

  @media (max-width: 600px) {
    padding: 0 1.2rem;
  }
`

export const NavContent = styled.ul`
  width: 100%;
  margin: 0 auto;
  max-width: 1800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
`

export const CartWrapper = styled.li`
  background: #ffffff;
  border-radius: 8px;
  width: 90px;
  height: 45px;
  color: #000;

  padding-left: 15px;
  padding-right: 27px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CartNumber = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
`

export const LogoWrapper = styled.li`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const NavTitle = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 19px;

  color: fff;
`

export const NavSubtitle = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 19px;

  padding-top: 0.8rem;

  color: #ffffff;
`
