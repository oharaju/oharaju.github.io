import Markdown from 'markdown-to-jsx';
import { Container, TextSmall, Title, Subtitle, Description, Link, Office, Area } from './styles';

export default function Hero ({title, subtitle, description}: any) {

  return(
    <Container>
      <div>
        <TextSmall>Olá, meu nome é</TextSmall>
        <Title>{title}</Title>
        <Markdown options={{ wrapper: Subtitle, 
          overrides: { h2: { component: Office }, span: { component: Area }}}}>
            {subtitle}
        </Markdown>
        <Markdown options={{ wrapper: Description, overrides: { a: { component: Link }}}}>
          {description}
        </Markdown>
      </div>
    </Container>
  )
}