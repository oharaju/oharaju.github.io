import { Container, List, Link } from './styles';
import { NavProps } from './types';

export default function Nav ({itsOpen} : NavProps) {

  const list = [
    {
      nameSection: 'Home',
      href: '#home'
    },
    {
      nameSection: 'Sobre',
      href: '#sobre',
    },
    {
      nameSection: 'Experiências',
      href : '#experiencias',
    },
    {
      nameSection: 'Projetos',
      href : '#',
    },
    {
      nameSection: 'Contato',
      href : '#'
    },
  ]

  return(
    <Container itsOpen={itsOpen}>
      <List>
        { list.map(item => (
          <li><Link href={item.href}>{item.nameSection}</Link></li>
        ))}
      </List>
    </Container>
  )
}