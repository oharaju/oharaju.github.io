import React, { useState } from 'react';
import Markdown from 'markdown-to-jsx';
import { Container, TextSmall, Title, ContainerAccordion, Accordion, Box, Office, SubHeading, Description, ListDescription, DescriptionList, Content } from  './styles';

export default function Experience ({heading, title, companies}: any) {

  const [activeButton, setActiveButton] = useState<number>(1);

  const companyAccordion= companies.map((company:any) => (
    <Accordion key={company.order} onClick={() => handleClick(company.order)} className={activeButton === company.order ? "active" : ""}>
      {company.name}
    </Accordion>
  ))

  const companyDescription = companies.map((company:any) => (
    <Box className={activeButton === company.order ? "active" : ""}>
      <Office>{company.office}</Office>
      <SubHeading>{company.time}</SubHeading>
      <Description>{company.descriptionCompany}</Description>
      <Description>{company.labels}</Description>
      {company.firstDescription &&
        <ListDescription>
          <DescriptionList>{company.firstDescription}</DescriptionList>
          <DescriptionList>{company.secondDescription}</DescriptionList>
          <DescriptionList>{company.fourthDescription}</DescriptionList>
          <DescriptionList>{company.fifthDescription}</DescriptionList>
        </ListDescription>
      }
    </Box>
  ))

  const handleClick = (order: number) => {
    setActiveButton((prevActiveButton) => (prevActiveButton === order ? prevActiveButton : order));
  };

  return(
    <section>
      <Container>
        <div>
          <Markdown options={{ wrapper: TextSmall, overrides: { p: { component: TextSmall }}}}>{heading}</Markdown>
          <Markdown options={{ wrapper: Title, overrides: { h3: { component: Title }}}}>{title}</Markdown>
        </div>
        <ContainerAccordion>
          <Content>
              {companyAccordion}
          </Content>
          <div>
            {companyDescription}
          </div>
        </ContainerAccordion>
      </Container>
    </section>
  )
}