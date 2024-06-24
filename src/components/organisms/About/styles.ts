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

const rotate = keyframes`
  0% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  50% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }
  100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
`

export const ImagemUser = styled.img`
  width: 100%;
  max-width: 350px;
  margin-bottom: 2rem;
  border-radius: 1rem;
  animation: ${rotate} 6s ease-in-out 1s infinite;
  animation-delay: 2s;

  @media ${media.md} {
    margin-bottom: 0;
  }
`

export const Title = styled.h3`
  color: ${colors.secondary};
  font-family: 'DM Sans', sans-serif;
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 32px;
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