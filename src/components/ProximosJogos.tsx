import type { Jogo } from '../data/jogos'
import CardJogo from './CardJogo'

type ProximosJogosProps = {
  jogos: Jogo[]
}

function ProximosJogos({ jogos }: ProximosJogosProps) {
  return (
    <aside className="jogos" id="jogos">
      <h2 className="secao-titulo">Próximos jogos</h2>

      <ul className="lista-jogos">
        {jogos.map((jogo) => (
          <CardJogo key={jogo.id} jogo={jogo} />
        ))}
      </ul>
    </aside>
  )
}

export default ProximosJogos
