import styled from 'styled-components'
import { theme } from 'config'

export const Footer = styled.footer`
  padding: 40px 0;
  background: ${({ theme }) => theme.footer};

  p {
    text-align: center;
    color: ${({ theme }) => theme.textFooter};
    font-size: 20px;
  }
`
