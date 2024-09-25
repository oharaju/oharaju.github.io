import styled, { keyframes } from 'styled-components';
import colors from '@/tokens/colors';

export const TextSmall = styled.p`
  color: ${colors.secondary};
  font-weight: 600;
  letter-spacing: 0.02rem;
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  font-size: clamp(30px, 8vw, 50px);
  font-weight: 600;
`

export const Subtitle = styled.h2`
  font-size: clamp(20px, 6vw, 50px);
  font-weight: 600;
  margin: 1rem 0;
  display: flex;
  gap: 10px;
`

export const Office = styled.h2`
  color: ${colors.secondary};
  font-weight: normal;
`

const cursor = keyframes`
  50% {
    border-color: transparent;
  }
`

const typing = keyframes`
  from { width: 0 }
`

export const Area = styled.span`
  color: ${colors.secondary};
  border-right: 2px solid #b4abab;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  animation:
    ${typing} 4s steps(18),
    ${cursor} .4s step-end infinite alternate;
`

export const Box = styled.div`
  display: inline-block;
`

export const Description = styled.p`
  color: ${colors.clearText};
  font-size: clamp(16px, 1vw, 21px);
  line-height: 1.5;
  letter-spacing: 0.02rem;
  margin-bottom: 5rem;
`

export const Link = styled.a`
  color: ${colors.secondary};
  font-weight: 600;
  margin-left: 5px;
`