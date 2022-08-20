import styled from 'styled-components'

interface IStyledProps {
  margin?: string
}

export const MainDiv = styled.div<IStyledProps>`
  display: flex;
  gap: 5px;

  margin: ${({ margin }) => margin || '0'};
`

export const DarkLogoText = styled.p`
  font-size: 32px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
`

export const GradientLogoText = styled.p`
  font-size: 32px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;

  background: -webkit-linear-gradient(#485bff, #ff59f8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
