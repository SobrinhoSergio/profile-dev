import styled from 'styled-components'
import { theme } from 'config'

export const Article = styled.article`
  padding: 60px 0;
  background-color: ${({ theme }) => theme.background};

  h2 {
    color: ${({ theme }) => theme.textColor};
    text-align: center;
    font-size: 25px;
    font-weight: normal;
    font-style: italic;
  }
`
