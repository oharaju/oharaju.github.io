import { Container, BrandLink, IconLink } from './styles';

export default function Brand () {
  return(
    <Container>
      <BrandLink href="#">
        <IconLink>&lt; </IconLink>
        oharaju
        <IconLink> /&gt;</IconLink>
      </BrandLink>
    </Container>
  )
}