import { DefaultButton } from '@components/atoms/buttons'
import { DefaultTextInput } from '@components/atoms/inputs'

import EnterIcon from '@assets/login/enter_icon.png'

import Logo from '@components/atoms/Logo'

import * as S from './styles'
import { useAuth } from '@contexts/auth'
import { useState } from 'react'

export default function LoginComponent() {
  const { signIn } = useAuth()

  const [email, setEmail] = useState('')

  return (
    <S.MainDiv>
      <Logo margin="0 0 20px 0" />

      <DefaultTextInput
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <DefaultButton onClick={() => signIn({ email })}>
        <img src={EnterIcon} alt="Icone de Login" />
        Fazer Login
      </DefaultButton>
    </S.MainDiv>
  )
}
