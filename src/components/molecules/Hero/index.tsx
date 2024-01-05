import Markdown from 'markdown-to-jsx';
import { TextSmall, Title, Subtitle, Description, Link, Office, Area } from './styles';
import Button from '@/components/atoms/Button/Index';

export default function Hero ({title, subtitle, description, children}: any) {

  return(
    <section>
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
        <Button>Baixar resumo</Button>
      </div>
    </section>
  )
}