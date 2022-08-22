import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Logo from '@components/atoms/Logo'
import { DefaultButton } from '@components/atoms/buttons'
import { DefaultTextInput } from '@components/atoms/inputs'

import EnterIcon from '@assets/login/enter_icon.png'

import { useAuth } from '@contexts/auth'

import * as S from './styles'

export default function LoginComponent() {
  const { signIn } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')

  return (
    <S.MainDiv>
      <Logo margin="0 0 20px 0" />

      <DefaultTextInput
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <DefaultButton
        onClick={() => {
          signIn({ email }).then(() => navigate('dogs-list'))
        }}
      >
        <img src={EnterIcon} alt="Icone de Login" />
        Fazer Login
      </DefaultButton>
    </S.MainDiv>
  )
}
