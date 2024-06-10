

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'

import { Container, Wrapper, Column, Row, Title, TitleLogin, SubTitleLogin, EsqueciText, CriarText } from './styles'

const Login = () => {
  return (
    <>
      <Header></Header>
      <Container>
        <Column>
            <Title> 
              A plataforma para você aprender com experts, dominar as principais tecnologias 
              e entrar mais rápido nas empresas mais desejadas. 
            </Title>
        </Column>  
        <Column>
            <Wrapper>
                <TitleLogin>Faça seu Cadastro</TitleLogin>
                <SubTitleLogin>Faça seu Login e make the change._</SubTitleLogin>
                <form>
                  <Input placeholder="E-mail"/>  <br></br>
                  <Input placeholder="Senha" type="password"/> <br></br>
                  <Button title="Entrar" variant='secondary'/>
                </form>
                <Row>
                    <EsqueciText>Esqueci minha Senha</EsqueciText>
                    <CriarText>Criar Conta </CriarText>
                </Row>
            </Wrapper>
        </Column>
      </Container>

    </>
  );
};

export { Login }
