import React, { useState } from 'react';
import Markdown from 'markdown-to-jsx';
import { Section, TextSmall, Title, Accordion, Content } from  './styles';

export default function Experience ({heading, title, companies}: any) {

  const [activeButton, setActiveButton] = useState<number | null>(1);

  const companyData = companies.map((company:any) => (
    <Accordion key={company.order} onClick={() => handleClick(company.order)} className={activeButton === company.order ? "active" : ""}>
      {company.name}
    </Accordion>
  ))

  const handleClick = (order: number) => {
    setActiveButton(order === activeButton ? null : order);
  };

  return(
    <Section>
      <div>
        <Markdown options={{ wrapper: TextSmall, overrides: { p: { component: TextSmall }}}}>{heading}</Markdown>
        <Markdown options={{ wrapper: Title, overrides: { h3: { component: Title }}}}>{title}</Markdown>
      </div>
      <Content>
        {companyData}
      </Content>
    </Section>
  )
}