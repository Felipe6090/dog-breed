import { DefaultButton } from '@components/atoms/buttons'
import { DefaultTextInput } from '@components/atoms/inputs'
import * as S from './styles'

export default function LoginComponent() {
  return (
    <S.MainDiv>
      <DefaultTextInput />

      <DefaultTextInput />

      <DefaultButton></DefaultButton>
    </S.MainDiv>
  )
}
