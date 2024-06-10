import React from 'react'
import { CardContainer, ImageBackground, Content, UserInfo, UserPicture, PostInfo, HasInfo } from './styles';

const  Card = () => {
  return (  
    <CardContainer>
        <ImageBackground src='https://img.freepik.com/fotos-gratis/misterio-da-natureza-retratado-em-cena-de-floresta-tranquila-ia-generativa_188544-9755.jpg?w=1380&t=st=1716985796~exp=1716986396~hmac=3d58608262b234f2bb9eade150cff7a6bf4b9210008699399690e91d00c981d8'></ImageBackground>
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/118942578?s=400&u=5c7405ca901f0abded70482e0ac1343ab402e74c&v=4'></UserPicture>
                <div>
                    <h4>Bruno Romano</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito o curso de html e css no bootcamp dio do Global avanade... <strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #Javascript</h4>
                <p>
                 
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}


export { Card }