import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Container, Column, Tittle, Wrapper, TitleCreate, SubTittle, Termos, TenhoConta, Logando, Row} from './styles'

const Account = () => {
  return (
    <>
    <Header></Header>
    <Container>
        <Column>
            <Tittle>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas </Tittle>
        </Column> 
        <Column>
            <Wrapper>
                <TitleCreate>Comece agora grátis</TitleCreate>
                <SubTittle>Crie sua conta e make the change._</SubTittle>
                <fomr>
                    <Input placeholder="Nome Completo" /><hr/> <br/>
                    <Input placeholder="E-mail"/><hr/> <br/>
                    <Input placeholder="Password"/><hr/> <br/> <br/>
                    <Button title="Criar minha conta" variant='secondary'/>
                </fomr>
                <Termos>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da Dio.</Termos>
                <Row>
                    <TenhoConta>Ja tenho conta.</TenhoConta>
                    <Logando>Fazer Login</Logando>
                </Row>

                
            </Wrapper>
        </Column>

    </Container>

    
    </>
  )
}

export { Account }