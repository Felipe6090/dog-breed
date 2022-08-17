import { StyledText } from '@components/typograph/StyledText'

import * as S from './styles'
import LoginComponent from './components/LoginComponent'

export default function Login() {
  return (
    <S.MainDiv>
      <S.Aside>
        <StyledText dark fontSize={36} fontFamily="Roboto" fontWeight="bold">
          Cachoro
        </StyledText>

        <StyledText dark fontSize={36} fontFamily="Roboto" fontWeight="bold">
          Cachoro
        </StyledText>
      </S.Aside>

      <LoginComponent />
    </S.MainDiv>
  )
}
