import styled from 'styled-components'

export const DefaultTextInput = styled.input`
  width: 50%;
  height: 50px;

  background-color: ${({ theme }) => theme.colors.white};

  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.silver_light};

  &::placeholder {
    ${({ theme }) => theme.colors.silver_light};

    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.silver_light};
  }

  outline: none;

  border: 1px solid ${({ theme }) => theme.colors.silver_light};
  border-radius: 8px;

  padding: 0 20px;
`
