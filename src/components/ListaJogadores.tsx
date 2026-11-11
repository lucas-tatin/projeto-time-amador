import type { Jogador } from '../data/jogadores'
import CardJogador from './CardJogador'

type ListaJogadoresProps = {
  jogadores: Jogador[]
}

function ListaJogadores({ jogadores }: ListaJogadoresProps) {
  if (jogadores.length === 0) {
    return <p className="lista-vazia">Nenhum jogador encontrado.</p>
  }

  return (
    <ul className="jogadores">
      {jogadores.map((jogador) => (
        <CardJogador key={jogador.id} jogador={jogador} />
      ))}
    </ul>
  )
}

export default ListaJogadores
