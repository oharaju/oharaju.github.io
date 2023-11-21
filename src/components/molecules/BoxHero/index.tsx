import { Container, TextSmall, Title, Link } from './styles';
import TextAnimation from '@/components/atoms/TextAnimation';

export default function BoxHero () {
  return(
    <Container>
      <div>
        <TextSmall>Olá, meu nome é</TextSmall>
        <Title>Júlia Ohara</Title>
        <TextAnimation />
        <p>
          Sou desenvolvedora front-end especializada na
          construção e design de experiências digitais. Atualmente, estou trabalhando na<Link href="https://www.dnxsolucoes.com.br/" target="_blank">DNX</Link>.</p>
      </div>
    </Container>
  )
}