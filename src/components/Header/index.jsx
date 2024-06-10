import React from "react";
import logo from "../../assets/logo-Dio.png";
import { Button } from "../Button";
import {
  Container,
  Row,
  Wrapper,
  BuscarInputContainer,
  Logo,
  Menu,
  MenuRight,
  Input,
} from "./styles";

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Logo src={logo} alt="Logo da Dio"></Logo>
          <BuscarInputContainer>
            <Input placeholder="Buscar..."/>
          </BuscarInputContainer>
          <Menu>Live Code</Menu>
          <Menu>Global</Menu>
        </Row>
        <Row>
          <MenuRight href="#">Home</MenuRight>
          <Button title="Entrar"></Button>
          <Button title="Cadastrar"></Button>
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
