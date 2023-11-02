import { Container, NavBar } from './styles';
import Brand from '@/components/atoms/Brand';

export default function Header () {
  return(
    <Container>
      <NavBar>
        <Brand />
      </NavBar>
    </Container>
  )
}