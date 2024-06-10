import React from 'react'

import { InputContainer, IconContainer, InputText} from './styles'
const Input = ({leftIcon, name, ...rest}) => {
  return (
    <IconContainer>
        {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
        <InputText {...rest}></InputText>
    </IconContainer>
  )
}

export { Input }
