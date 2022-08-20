import styled from 'styled-components'

interface IStyledProps {
  margin?: string
}

export const DefaultButton = styled.button<IStyledProps>`
  width: 50%;
  height: 50px;

  background-color: ${({ theme }) => theme.colors.dark_blue};

  border-radius: 8px;
  border: none;

  margin: ${({ margin }) => margin || '0'};

  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;

  display: flex;

  align-items: center;
  justify-content: center;
  gap: 15px;

  cursor: pointer;
`
