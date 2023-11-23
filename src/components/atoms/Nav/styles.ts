import styled, {css} from 'styled-components';
import { ListProps } from './types';

export const Container = styled.nav<ListProps>`
  display: none;
  position: absolute;
    left: 0;
    right: 0;
  transition: all .75s ease-in-out;
  z-index: -1;
  top: 15%;

  /* transition: all 0.5s;
  transform: translateY(80%); */

  ${({ itsOpen }) => itsOpen && css`
    display: block;
    opacity: 1;
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