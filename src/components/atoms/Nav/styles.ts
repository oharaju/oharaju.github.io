import styled, { css } from 'styled-components';
import { ListProps } from './types';
import { device, maxDevice } from '@/tokens/media';
import colors from '@/tokens/colors';

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

  @media ${device.md} {
    display: block;
    position: inherit;
    z-index: 3;
    letter-spacing: 1.5px;
  }

`

export const List = styled.ul`
  background-color: #fcd3d3;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 3rem 0;
  margin: 0;
  font-size: 15px;

  @media ${device.md} {
    background-color: transparent;
    flex-direction: row;
    padding: 0;
  }
`

export const Link = styled.a`
  color: ${colors.clearText};
  text-decoration: none;

  &:hover {
    color: #c8023f;
  }
`