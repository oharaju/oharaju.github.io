import Markdown from 'markdown-to-jsx';
import { Section, TextSmall, Title, Accordion, Description } from  './styles';


export default function Experience ({heading, title, list}: any) {

  const experienceData = list.map((data:any) => (
      <Accordion key={data.order}>
        {data.company}
      </Accordion>
    )
  )
  return(
    <Section>
      <div>
        <Markdown options={{ wrapper: TextSmall, overrides: { p: { component: TextSmall }}}}>{heading}</Markdown>
        <Markdown options={{ wrapper: Title, overrides: { h3: { component: Title }}}}>{title}</Markdown>
      </div>
      {experienceData}
    </Section>
  )
}