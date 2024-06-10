import { Link } from 'react-router-dom'

import  bannerImage  from '../../assets/Teste4.png'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'

import { Container, Title, TitleHighLight, TextContent, Imageprincipal } from './styles'

const Home = () => {
  return (
    <>
      <Header></Header>
      <Container>
        <div>
            <Title> 
                <TitleHighLight>
                  Implemente
                <br/>
                </TitleHighLight>
                o seu futuro global agora!
            </Title>
            <TextContent>
              Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo 
              desafio profissional, evoluindo em comunidade com os melhores experts. 
            </TextContent>
            <Button title='Começar agora' variant='secondary' onClick={() => null}></Button>
        </div>  
        <div>
            <Imageprincipal src={bannerImage} alt="Imagem principal "></Imageprincipal>
        </div>
      </Container>

    </>
  );
};

export { Home }
