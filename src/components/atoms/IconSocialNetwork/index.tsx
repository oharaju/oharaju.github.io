import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BoxLink, LinkIcon } from './styles';

export default function IconsSocialNetwork () {

  const linkIcons = [
    {
      icon: <FaLinkedinIn/>,
      href: 'https://www.linkedin.com/in/juliaoharabr/',
    },
    {
      icon: <FaGithub/>,
      href: 'https://github.com/oharaju',
    },
  ]

  return(
  <>
    <BoxLink>
      {linkIcons.map(link => (
        <LinkIcon href={link.href} target="_blank">
          {link.icon}
        </LinkIcon>
      ))}
    </BoxLink>
  </>
)}