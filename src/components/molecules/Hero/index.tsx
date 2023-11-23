import Markdown from 'markdown-to-jsx'
import { Container, TextSmall, Title, Subtitle, Description, Link } from './styles';

export default function Hero ({title, subtitle, description}: any) {

  return(
    <Container>
      <div>
        <TextSmall>Olá, meu nome é</TextSmall>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Markdown options={{ wrapper: Description, overrides: { a: { component: Link } } }}>
          {description}
        </Markdown>
      </div>
    </Container>
  )
}