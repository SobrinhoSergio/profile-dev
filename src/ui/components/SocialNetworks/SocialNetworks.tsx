import {
  github,
  gmail,
  instagram,
  linkedin,
  medium,
  twitter,
} from 'assets'

import * as S from './SocialNetworks.styled'

export function SocialNetworks() {
  return (
    <S.IconsList>
      <li>
        <a
          href='https://github.com/SobrinhoSergio'
          target='_blank'
          rel='noreferrer'
        >
          <img src={github} alt='github logo' />
        </a>
      </li>

      <li>
        <a
          href='https://www.instagram.com/sergio.sobrinho7/'
          target='_blank'
          rel='noreferrer'
        >
          <img src={instagram} alt='instagram logo' />
        </a>
      </li>

      <li>
        <a
          href='mailto:sobrinhosergio00@gmail.com.com'
          target='_blank'
          rel='noreferrer'
        >
          <img src={gmail} alt='gmail logo' />
        </a>
      </li>

      <li>
        <a
          href='https://www.linkedin.com/in/sobrinhosergio/'
          target='_blank'
          rel='noreferrer'
        >
          <img src={linkedin} alt='linkedin logo' />
        </a>
      </li>
    </S.IconsList>
  )
}
