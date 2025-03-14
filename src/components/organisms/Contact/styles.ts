import styled from 'styled-components';
import colors from '@/tokens/colors';
import { device, maxDevice } from '@/tokens/media';

export const Container = styled.div`
  margin: 7rem 0;
`

export const Box = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;

  @media ${device.sm} {
    min-width: 520px;
  }

  @media ${device.md} {
    min-width: 730px;
  }

  @media ${device.xl} {
    min-width: 1098px;
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

export const TextSmall = styled.p`
  color: ${colors.secondary};
  font-weight: 600;
  font-size: inherit;
  letter-spacing: 0.02rem;
  margin: 1rem 0;
`

export const Description = styled.h4`
  color: ${colors.gray};
  font-size: clamp(16px, 1vw, 19px);
  letter-spacing: 0.02rem;
  text-align: justify;
`

export const SocialLinks = styled.div`
  display: grid;
  gap: 20px;
  justify-items: center;
  margin-top: 2rem;

  @media ${maxDevice.sm} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.sm} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${device.md} {
    grid-template-columns: repeat(4, 200px);
    justify-content: center;
  }
`

export const Link = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  transition: 0.4s;

  &:hover {
    outline: none;
    transform: scale(1.1);
  }
`

export const Roudend = styled.div`
  background-color: ${colors.white};
  border: 1px solid #0000002d;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Icon = styled.img`
  width: 100%;
  max-width: 30px;
  height: 100%;
  max-height: 30px;
`

export const BoxContact = styled.div`
  display: flex;
  flex-direction: column;
`