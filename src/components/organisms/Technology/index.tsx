import Markdown from 'markdown-to-jsx';
import { Section, Box, Container, Title, TextSmall, Description, ContainerCard, Card, Icon }  from './styles';
import ScrollAnimation from 'react-animate-on-scroll';

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
    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
      <section>
        <Container>
          <Box>
              <Markdown options={{ wrapper: TextSmall, overrides: { p: { component: TextSmall }}}}>{heading}</Markdown>
              <Markdown options={{ wrapper: Title, overrides: { h3: { component: Title }}}}>{title}</Markdown>
              <Description>{description}</Description>
              <ContainerCard>
                {cardsTechnologies}
              </ContainerCard>
          </Box>
        </Container>
      </section>
    </ScrollAnimation>
  )
}
