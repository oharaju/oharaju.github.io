import Markdown from 'markdown-to-jsx';
import { Section, Container, Title, TextSmall, Description, ContainerCard, Card, Icon }  from './styles';

export default function Technology ({ heading, title, description, technologies } : any ) {

  const cardsTechnologies= technologies.map((technology:any, index:number) => (
    <div>
      <Card key={index}>
        {technology.name}
        <Icon src={technology.icon} />
      </Card>
    </div>
  ))

  return(
    <section>
      <Container>
      <p>Em desenvolvimento!!!</p>
        <div>
          <Markdown options={{ wrapper: TextSmall, overrides: { p: { component: TextSmall }}}}>{heading}</Markdown>
          <Markdown options={{ wrapper: Title, overrides: { h3: { component: Title }}}}>{title}</Markdown>
          <Description>{description}</Description>
        </div>
          <ContainerCard>
            {cardsTechnologies}
          </ContainerCard>
      </Container>
    </section>
  )
}
