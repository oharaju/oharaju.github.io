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

export const Link = styled.a`
  color: ${colors.secondary};
  font-weight: 600;
  margin-left: 5px;
`