 import React from 'react'
 import { Container, UserPicture, NameText, Progress } from './styles'
 
 const UserInfo = ({nome, image, percentual}) => {
   return (
     <Container>
        <UserPicture src={image}></UserPicture>
        <div>
            <NameText>{nome}</NameText>
            <Progress percentual={percentual}></Progress>
        </div>
     </Container>
   )
 }
 
 export { UserInfo }