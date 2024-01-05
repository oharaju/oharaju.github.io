import { useState } from 'react';
import { Container, NavBar } from './styles';
import Brand from '@/components/atoms/Brand';
import Hamburger from '@/components/atoms/Hamburger';
import Nav from '@/components/atoms/Nav';

export default function Header () {

  const [menuItsOpen, setMenuItsOpen] = useState(false);

  return(
    <Container>
      <NavBar>
        <Brand />
        <Hamburger itsOpen={menuItsOpen} setItsOpen={setMenuItsOpen} />

        <Nav itsOpen={menuItsOpen} />
      </NavBar>
      
    </Container>
  )
}