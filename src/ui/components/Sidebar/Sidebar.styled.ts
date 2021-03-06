import styled from 'styled-components/macro'

export const Navbar = styled.div`
  height: 40px;
  padding: 0px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 1;
`

export const ShowSidebar = styled.div`
  button {
    position: absolute;
    top: 30px;
    left: 40px;
    background: none;
    color: ${({ theme }) => theme.icon};
    border: 1px solid ${({ theme }) => theme.textColor};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    gap: 10px;
  }
`
