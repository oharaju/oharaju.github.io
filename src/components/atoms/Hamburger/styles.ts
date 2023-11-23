import styled, {css} from "styled-components";
import { ButtonProps } from './types';
import media from '@/tokens/media';

const lineDefaultSyles = css`
  width: 35px;
  height: 4px;
  margin: 6px 0;
  transition: 0.4s;
  background: -webkit-linear-gradient(135deg, #3f2dc8, #6247aa, #e38c8f);
`
export const LineOne = styled.div`
  ${lineDefaultSyles}
`
export const LineTwo = styled.div`
  ${lineDefaultSyles}
`
export const LineThree = styled.div`
  ${lineDefaultSyles}
`

export const Button = styled.button<ButtonProps>`
  background-color: transparent;
  border: 0;
  padding: 0;
  padding-right: 2rem;
  cursor: pointer;

  ${({ itsOpen }) => itsOpen && css`
    ${LineOne} {
      transform: rotate(-45deg) translate(-7px, 5px);
    }

    ${LineTwo} {
      opacity: 0;
    }

    ${LineThree} {
      transform: rotate(45deg) translate(-8px, -8px);
    }
  `}

  @media ${media.md} {
    display: none;
  }
`