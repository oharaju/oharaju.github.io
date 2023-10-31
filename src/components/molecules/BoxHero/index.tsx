import { Container, ContainerImage, ImageAvatar } from './styles';
import IconsSocialNetwork from '@/components/atoms/IconSocialNetwork';

export default function BoxHero () {
  return(
    <Container>
      <IconsSocialNetwork/>
      <ContainerImage>
        <ImageAvatar src="./images/avatar-hero.png" alt="Avatar"/>
      </ContainerImage>
    </Container>
  )
}