import Markdown from 'markdown-to-jsx';
import { Box, Container, Title, TextSmall, Description, Card, Icon } from './styles';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Contact({ heading, title, description, contacts }: any) {

  const cardsTechnologies = contacts.map((contact: any, index: number) => (
    <div>
      <Card key={index}>
        {contact.name}
        <Icon src={contact.icon} />
      </Card>
    </div>
  ))

  return (
    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
      <section>
        <Container>
          <Box>
            <Markdown options={{ wrapper: TextSmall, overrides: { p: { component: TextSmall } } }}>{heading}</Markdown>
            <Markdown options={{ wrapper: Title, overrides: { h3: { component: Title } } }}>{title}</Markdown>
            <Description>{description}</Description>
            <div>
              {cardsTechnologies}
            </div>
          </Box>
        </Container>
      </section>
    </ScrollAnimation>
  )
}