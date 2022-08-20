import { StyledText } from '@components/typograph/StyledText'

import * as S from './styles'
import LoginComponent from './components/LoginComponent'

export default function Login() {
  return (
    <S.MainDiv>
      <S.Aside>
        <StyledText fontSize={36} fontFamily="Poppins" fontWeight="bold">
          Veja doguinhos fofinhos!
        </StyledText>

        <StyledText fontSize={24} fontFamily="Roboto" fontWeight="regular">
          Aprecie e compartilhe seus pets com outras pessoas
        </StyledText>
      </S.Aside>

      <LoginComponent />
    </S.MainDiv>
  )
}
