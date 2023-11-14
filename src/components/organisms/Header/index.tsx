import { useState } from 'react';
import { Container, NavBar } from './styles';
import Brand from '@/components/atoms/Brand';
import Hamburger from '@/components/atoms/Hamburger';

export default function Header () {

  const [menuItsOpen, setMenuItsOpen] = useState(false);

  return(
    <Container>
      <NavBar>
        <Brand />
        <div>
          <Hamburger itsOpen={menuItsOpen} setItsOpen={setMenuItsOpen} />
        </div>
      </NavBar>
    </Container>
  )
}