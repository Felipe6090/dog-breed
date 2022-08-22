import Logo from '../Logo'

import UserIcon from '@assets/header/user.png'

import * as S from './styles'

export default function Header() {
  return (
    <S.MainDiv>
      <Logo />

      <S.IconWrapper>
        <img src={UserIcon} alt="Icone de usuario" />
      </S.IconWrapper>
    </S.MainDiv>
  )
}
