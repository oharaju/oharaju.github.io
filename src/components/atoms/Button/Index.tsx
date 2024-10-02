import { ButtonStyles } from './styles';

export default function Button ({ children, ...rest }: any) {
  return(
    <ButtonStyles {...rest}>{children}</ButtonStyles>
  )
}