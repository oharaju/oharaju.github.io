import Markdown from 'markdown-to-jsx';
import { TextSmall, Title, Subtitle, Description, Link, Office, Area, Box } from './styles';
import Button from '@/components/atoms/Button/Index';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Hero ({title, role, description, children}: any) {
  return(
    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
      <section>
        <div>
          <TextSmall>Olá, meu nome é</TextSmall>
          <Title>{title}</Title>
          <Box>
            <Markdown options={{ wrapper: Subtitle,
              overrides: { h2: { component: Office }, span: { component: Area }}}}>
              {role}
            </Markdown>
          </Box>
          <Markdown options={{ wrapper: Description, overrides: { a: { component: Link }}}}>
            {description}
          </Markdown>
          <Button href='./cv_julia_ohara_front_end.pdf' target="_blank">
            Baixar resumo
          </Button>
        </div>
      </section>
    </ScrollAnimation>
  )
}