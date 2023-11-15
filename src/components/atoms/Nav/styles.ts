import styled, {css} from 'styled-components';
import { ListProps } from './types';

export const Container = styled.nav<ListProps>`
  display: none;
  transition: all 0.5s;
  transform: translateY(80%);

  ${({ itsOpen }) => itsOpen && css`
    display: block;
  `}
`

export const List = styled.ul`
  background-color: #fcd3d3;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 5rem 0 3rem;
  margin: 0;
`

export const Link = styled.a`
  color: #4b4b4b;
  text-decoration: none;

  &:hover {
    color: #c8023f;
  }
`