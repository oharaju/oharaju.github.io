import styled from 'styled-components';
import media from '@/tokens/media';
import colors from '@/tokens/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 0 2rem;
  min-height: 60vh;

  @media ${media.lg} {
    padding: 0;
  }
`

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
`

export const Office = styled.h2`
  color: ${colors.secondary};
  font-weight: normal;
`

export const Description = styled.p`
  color: red;
`

export const Link = styled.a`
  color: ${colors.secondary};
  font-weight: 600;
  margin-left: 5px;
  background: pink;
`