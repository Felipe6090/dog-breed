import styled from 'styled-components'

interface StyledProps {
  fontWeight: 'black' | 'bold' | 'regular' | 'light'
  fontFamily: 'Poppins' | 'Roboto'
  fontSize: number
  align?: string
  dark?: boolean
}

export const StyledText = styled.p<StyledProps>`
  font-family: '${props => props.fontFamily}';
  font-weight: ${props => props.fontWeight};
  font-size: ${props => props.fontSize}px;

  text-align: ${props => props.align || 'center'};

  color: ${({ theme, dark }) =>
    dark ? theme.colors.black : theme.colors.white};
`
