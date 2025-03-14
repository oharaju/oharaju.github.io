import styled from 'styled-components';
import colors from '@/tokens/colors';
import { device, maxDevice } from '@/tokens/media';
export const Section = styled.section`
  padding: 0;

  @media ${device.md} {
    padding: 0 5rem;
  }
`

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
`

export const ContainerCard = styled.div`
display: grid;
grid-column-gap: 1rem;
grid-row-gap: 1rem;
margin-top: 2rem;
grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
`

export const Card = styled.div`
  background-color: ${colors.white};
  border: 1px solid #0000002d;
  padding: 1.3rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.2s;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0px 11px rgb(0 0 0 / 6%);
  }
`

export const Icon = styled.img`
  width: 100%;
  max-width: 40px;
  height: 100%;
  max-height: 40px;
  margin-top: 1rem;
`