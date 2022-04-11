import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { BsThreeDots } from 'react-icons/bs'

import Sidebar from 'ui/components/Sidebar/Sidebar'
import { Section } from 'ui/components/Section'
import { Parallax } from 'ui/components/Parallax'
import { Article } from 'ui/components/Article'
import { Footer } from 'ui/components/Footer'

import { curriculo } from 'assets'

import * as S from './AboutMe.styled'

export function AboutMe() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <>
      {!loading && (
        <>
          <Sidebar />

          <S.Container>
            <span>Fala Dev, eu sou o Sérgio Sobrinho 💜️</span>
            <h2>
              Desenvolvendo produtos digitais de qualidade através de códigos.
              ✨
            </h2>
            <p>
              Um Desenvolvedor Full Stack com brilho no olho, que se importa com
              cada detalhe ao construir interfaces prezando pela experiência
              para que impacte positivamente na vida das pessoas.
            </p>
            <Link to={curriculo} target='_blank'>
              Currículo
            </Link>
          </S.Container>
          <Section />
          <Parallax />
          <Article />
          <Footer />
        </>
      )}

      {loading && (
        <S.Loader>
          <BsThreeDots size={40} />
        </S.Loader>
      )}
    </>
  )
}
