import Home from '@/pages';
import { Container, List, Link } from './styles';
import { NavProps } from './types';

export default function Nav ({itsOpen} : NavProps) {

  const list = [
    {
      nameList: 'Home',
      href: '#',
    },
    {
      nameList: 'Sobre',
      href: '#',
    },
    {
      nameList: 'Experiências',
      href : '#',
    },
    {
      nameList: 'Projetos',
      href : '#',
    },
    {
      nameList: 'Contato',
      href : '#',
    },
  ]
 
  return(
    <Container itsOpen={itsOpen}>
      <List>
        { list.map(item => (
          <li><Link href={item.href}>{item.nameList}</Link></li>
        ))}
      </List>
    </Container>
  )
}