import styled from 'styled-components'
import { theme } from 'config'

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 300px;
  background: ${({ theme }) => theme.footer};
  width: 100%;
  margin: 90px 0 0 0;
  color: ${({ theme }) => theme.textFooter};

  p {
    margin: 5px 0 5px 0;
  }

  a {
    color: ${theme.colors.gray[800]};
    text-decoration: underline;
  }
`
