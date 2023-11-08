import { Button, LineOne, LineTwo, LineThree } from './styles';
import { HamburgerProps } from './types';

export default function Hamburger ({itsOpen, setItsOpen} : HamburgerProps) {
  return(
    <Button type='button' onClick={() => setItsOpen(!itsOpen)} itsOpen={itsOpen}>
      <LineOne></LineOne>
      <LineTwo></LineTwo>
      <LineThree></LineThree>
    </Button>
  )
}

