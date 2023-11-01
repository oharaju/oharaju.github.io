import { Container, BrandLink, IconLink } from './styles';

export default function Brand () {
  return(
    <Container>
      <BrandLink href="#">
        <IconLink>&lt; </IconLink>
        juliaohara
        <IconLink> /&gt;</IconLink>
      </BrandLink>
    </Container>
  )
}