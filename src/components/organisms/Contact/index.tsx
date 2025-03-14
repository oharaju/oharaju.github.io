import Markdown from 'markdown-to-jsx';
import { Container, Box, Title, TextSmall, Description, SocialLinks, Link, Roudend, Icon, BoxContact } from './styles';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Contact({ heading, title, description, contacts }: any) {

  const cardsTechnologies = contacts.map((contact: any, index: number) => (
    <Link href={contact.address} target="_blank" key={index}>
      <Roudend>
        <Icon src={contact.icon} alt={contact.name} />
      </Roudend>
      <BoxContact>
        <p>{contact.name}</p>
      </BoxContact>
    </Link>
  ));

  return (
    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
      <section>
        <Container>
          <Box>
            <Markdown options={{ wrapper: TextSmall, overrides: { p: { component: TextSmall } } }}>{heading}</Markdown>
            <Markdown options={{ wrapper: Title, overrides: { h3: { component: Title } } }}>{title}</Markdown>
            <Description>{description}</Description>
            <SocialLinks>
              {cardsTechnologies}
            </SocialLinks>
          </Box>
        </Container>
      </section>
    </ScrollAnimation>
  )
}