import styled, { keyframes } from 'styled-components';
import media from '@/tokens/media';
import colors from '@/tokens/colors';

export const Container = styled.div`
  margin-top: 7rem;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-width: 200px;
  max-width: 200px;
`

export const ContainerAccordion = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;

  @media ${media.md} {
    flex-direction: row;
    gap: 1rem;
  }

  @media ${media.lg} {
    gap: 2rem;
  }
`

export const Accordion = styled.button`
  display: block;
  background-color: transparent;
  color: ${colors.secondary};
  padding: 16px 20px;
  width: 100%;
  min-width: 200px;
  max-width: 200px;
  border: none;
  outline: none;
  text-align: left;
  transition: background-color 0.3s;
  font-size: 15px;
  position: relative;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    left: -2px;
    top: 0;
    height: 100%;
    border-left: 2px solid #dfdfdf;
  }

  &:hover {
    background-color: ${colors.primary};
  }

  &.active {
    background-color: ${colors.primary};

    &::after {
      border-left: 2px solid ${colors.secondary};
    }
  }
`;

export const Box = styled.div`
  color: ${colors.clearText};
  display: none;
  font-size: clamp(16px, 1vw, 18px);
  line-height: 30px;
  letter-spacing: 0.02rem;
  text-align: justify;
  width: 100%;
  max-width: 700px;
  height: 100%;

  &.active{
    display: block;
  }

  @media ${media.md} {
    min-width: 544px;
  }

  @media ${media.lg} {
    min-width: 700px;
    max-height: 580px;
    min-height: 580px;
  }
`

export const Office = styled.h4`
  color: ${colors.gray};
  font-size: 22px;
  margin-bottom: 0.1rem;
`

export const SubHeading = styled.p`
  color: ${colors.clearText};
  font-size: .875em;
  margin-bottom: 1rem;
`

export const Description = styled.p`
  color: ${colors.gray};
  font-size: clamp(16px, 1vw, 18px);
  line-height: 30px;
  letter-spacing: 0.02rem;
  margin-bottom: 1rem;
  text-align: justify;
  width: 100%;
  max-width: 700px;
`

export const ListDescription = styled.ul`
  padding: 0 1.5rem;
`

export const DescriptionList = styled.li`
  list-style: disc;
  margin-bottom: 1rem;
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