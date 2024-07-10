import styled, { keyframes } from 'styled-components';
import media from '@/tokens/media';
import colors from '@/tokens/colors';

export const Container = styled.div`

  @media ${media.md} {
    display: flex;
    align-items: center;
    gap: 3rem;
  }
`
export const Section= styled.section`
  display: flex;
  align-items: flex-start;
  padding: 0 2rem;
  height: 100%;
  min-height: 630px;
`

export const Accordion = styled.button`
  display: block;
  background-color: ${colors.primary};
  color: ${colors.secondary};
  padding: 16px 20px;
  width: 100%;
  border: none;
  outline: none;
  text-align: left;
  transition: 0.3s;
  font-size: 15px;
  position: relative;

  &::after{
    content: "";
    position: absolute;
    left: -2px;
    top: 0;
    height: 100%;
    border-left: 2px solid ${colors.secondary};
  }
`

export const Title = styled.h3`
  color: ${colors.gray};
  font-family: 'DM Sans', sans-serif;
  font-size: 2.25rem;
  font-weight: 600;
  margin-bottom: 32px;
  line-height: 2.5rem;
`

export const TextSmall= styled.p`
  color: ${colors.secondary};
  font-weight: 600;
  font-size: inherit;
  letter-spacing: 0.02rem;
  margin: 1rem 0;
`

export const Description = styled.p`
  color: #4b4b4b;
  font-size: clamp(16px, 1vw, 18px);
  line-height: 30px;
  letter-spacing: 0.02rem;
  margin-bottom: 2rem;
  text-align: justify;
  width: 100%;
  max-width: 700px;
`