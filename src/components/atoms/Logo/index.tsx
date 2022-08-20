import * as S from './styles'

interface IStyledProps {
  margin?: string
}

export default function Logo({ margin }: IStyledProps) {
  return (
    <S.MainDiv margin={margin}>
      <S.DarkLogoText>Dog</S.DarkLogoText>

      <S.GradientLogoText>Breed</S.GradientLogoText>
    </S.MainDiv>
  )
}
