import { useState } from 'react'

import * as AiIcons from 'react-icons/ai'

import Menu from '../Menu/Menu'
import { Toggle } from '../Toggle'

import * as S from './Sidebar.styled'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <S.Navbar>
        <S.ShowSidebar>
          <button onClick={() => setIsOpen(true)}>
            <AiIcons.AiOutlineMenu size={30} />
            Menu
          </button>
          {isOpen ? <Menu onClose={() => setIsOpen(false)} /> : null}
        </S.ShowSidebar>
      </S.Navbar>

      <Toggle />
    </>
  )
}
