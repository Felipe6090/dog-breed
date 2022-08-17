import styled from 'styled-components'

export const DefaultTextInput = styled.input`
  width: 320px;
  height: 50px;

  background-color: ${({ theme }) => theme.colors.white};

  color: ${({ theme }) => theme.colors.silver_light};
  &::placeholder {
    ${({ theme }) => theme.colors.silver_light};
  }

  border: 1px solid ${({ theme }) => theme.colors.silver_light};
`
