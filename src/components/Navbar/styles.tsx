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
`

export const NavContent = styled.ul`
  width: 100%;
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
`
