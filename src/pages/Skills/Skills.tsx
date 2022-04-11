import Sidebar from 'ui/components/Sidebar/Sidebar'
import { Section } from 'ui/components/Section'
import { Parallax } from 'ui/components/Parallax'
import { Article } from 'ui/components/Article'
import { Footer } from 'ui/components/Footer'
import { css, html, javascript, react, typescript } from 'assets'

import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaFigma,
  FaBootstrap,
} from 'react-icons/fa'
import { GrMysql } from 'react-icons/gr'
import {
  SiJavascript,
  SiVisualstudiocode,
  SiStyledcomponents,
} from 'react-icons/si'

import * as S from './Skills.styled'

export function Skills() {
  return (
    <>
      <Sidebar />

      <S.Container>
        <h1>Tecnologias 💻</h1>
        <S.List>
          <li>
            <h3>HTML</h3>
            <FaHtml5 className='icons' />
          </li>
          <li>
            <h3>CSS</h3>
            <FaCss3 className='icons' />
          </li>
          <li>
            <h3>JavaScript</h3>
            <SiJavascript className='icons' />
          </li>
          <li>
            <h3>ReactJS</h3>
            <FaReact className='icons' />
          </li>
          <li>
            <h3>Styled-Components</h3>
            <SiStyledcomponents className='icons' />
          </li>
          <li>
            <h3>Bootstrap</h3>
            <FaBootstrap className='icons' />
          </li>
          <li>
            <h3>TypeScript</h3>
            <img src={typescript} alt='typescript icon' />
          </li>
          <li>
            <h3>NodeJS</h3>
            <FaNodeJs className='icons' />
          </li>
          <li>
            <h3>PHP</h3>
            <FaPhp className='icons' />
          </li>
          <li>
            <h3>MySQL</h3>
            <GrMysql className='icons' />
          </li>
          <li>
            <h3>Visual Code</h3>
            <SiVisualstudiocode className='icons' />
          </li>
          <li>
            <h3>Figma</h3>
            <FaFigma className='icons' />
          </li>
        </S.List>
      </S.Container>
      <Section />
      <Parallax />
      <Article />
      <Footer />
    </>
  )
}
