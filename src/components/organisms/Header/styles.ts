import { styled } from 'styled-components';
import colors from '@/tokens/colors';

export const Container = styled.header`
  opacity: 0.6;
  margin-bottom: 63px;
  border-radius: 10px;
  height: 5rem;
`

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  padding: 0 12px;
`

export const Menu = styled.div`
  display: flex;
  gap: 12px;
`

export const Link = styled.a`
  color: ${colors.white};
  font-size: 18px;
  text-decoration: none;
`