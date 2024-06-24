import { Container, ImagemUser, Content, Title, Description } from  './styles';

export default function About() {
  return(
    <section>
      <Container>
        <Content>
          <ImagemUser src='./images/photo-julia-ohara.jpeg' alt='Imagem de Júlia Ohara' />
        </Content>
        <div>
          <Title>Sobre mim</Title>
          <Description>
            Sou desenvolvedora Front-end apaixonada por transformar ideias em interfaces digitais funcionais e atrativas. Meu foco é desenvolver aplicações web, sites responsivos e interfaces acessíveis, buscando sempre unir design e usabilidade de forma harmoniosa.
          </Description>
          <Description>
            Acredito que o aprendizado é um processo contínuo e estou dedicando cada vez mais esforços para me aprimorar. Aqui você encontrará exemplos do meu trabalho e do meu compromisso com a criação de soluções digitais que não apenas atendem, mas garantem resultados positivos.
          </Description>
        </div>
      </Container>
    </section>
  )
}
