import { SocialNetworks } from '../SocialNetworks'

import * as S from './Section.styled'

export function Section() {
  return (
    <S.Section>
      <span>Vamos nos conectar!</span>
      <p>Me mande uma mensagem em uma de minhas redes.</p>
      <SocialNetworks />
    </S.Section>
  )
}
