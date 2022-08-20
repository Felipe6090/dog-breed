import styled from 'styled-components'

import asideImage from '../../assets/login/husky.png'

export const MainDiv = styled.main`
  display: flex;

  height: 100vh;
`

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;

  width: 50%;

  background-color: #835afd;

  justify-content: flex-end;

  gap: 40px;

  background-image: url(${asideImage});

  background-position: center 20%;
  background-repeat: no-repeat;

  background-size: 80%;

  padding: 0 5% 25px;
`

export const x = styled.img``
