import { Link } from 'react-router-dom'

import  bannerImage  from '../../assets/Teste4.png'
import { Button } from '../../components/Button'
import { Card } from '../../components/Card'
import { Header } from '../../components/Header'

import { Container, Column, Title, TitleHighLight } from './styles'

const Feed = () => {
  return (
    <>
      <Header></Header>
      <Container>
          <Column flex={3}>
              <Title>Feed </Title>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
          </Column>
          <Column flex={1}>
              <TitleHighLight># RANKING 5 TOP DA SEMANA</TitleHighLight>
              
          </Column>
      </Container>  

    </>
  );
};

export { Feed }
