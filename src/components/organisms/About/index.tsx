import Markdown from 'markdown-to-jsx';
import { Container, ImagemUser, Content, TextSmall, Title, Description } from  './styles';

export default function About ({title, heading, firstParagraph, secondParagraph}: any) {
  return(
    <section>
      <Container>
        <Content>
          <ImagemUser src='./images/photo-julia-ohara.jpeg' alt='Imagem de Júlia Ohara' />
        </Content>
        <div>
          <Markdown options={{ wrapper: TextSmall, overrides: { p: { component: TextSmall }}}}>{heading}</Markdown>
          <Markdown options={{ wrapper: Title, overrides: { h3: { component: Title }}}}>{title}</Markdown>
          <Markdown options={{ wrapper: Description, overrides: { p: { component: Description }}}}>{firstParagraph}</Markdown>
          <Markdown options={{ wrapper: Description, overrides: { p: { component: Description }}}}>{secondParagraph}</Markdown>
        </div>
      </Container>
    </section>
  )
}
