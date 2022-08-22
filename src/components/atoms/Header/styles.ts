import styled from 'styled-components'

export const MainDiv = styled.div`
  display: flex;

  justify-content: space-between;

  padding: 20px 10%;

  border-bottom: 1px solid ${({ theme }) => theme.colors.silver_bold};
`

export const IconWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.purple};

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 11px;
  border-radius: 10px;
`
