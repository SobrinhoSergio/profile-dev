import styled from 'styled-components'
import { bg } from 'assets'

export const Div = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-color: rgba(0, 0, 0, 0.4);
  background-blend-mode: color;
  background-attachment: fixed;
  padding: 120px 0;
`
