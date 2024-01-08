import {useState} from 'react'

import {
  MainContainer,
  BoxContainer,
  Heading,
  Input,
  TextPara,
  WarningText,
  InputContainer,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const passwordLength = password.length < 8

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  return (
    <MainContainer>
      <BoxContainer>
        <Heading>Password Validation</Heading>
        <TextPara>Check how strong and score is your password</TextPara>
        <InputContainer>
          <Input type="password" value={password} onChange={onChangePassword} />
        </InputContainer>
        {passwordLength && (
          <WarningText>Your password must be at least 8 characters</WarningText>
        )}
      </BoxContainer>
    </MainContainer>
  )
}

export default PasswordValidator
