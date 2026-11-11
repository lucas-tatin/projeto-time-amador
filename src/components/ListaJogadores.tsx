import type { Jogador } from '../data/jogadores'
import CardJogador from './CardJogador'

type ListaJogadoresProps = {
  jogadores: Jogador[]
}

function ListaJogadores({ jogadores }: ListaJogadoresProps) {
  return (
    <ul className="jogadores">
      {jogadores.map((jogador) => (
        <CardJogador key={jogador.id} jogador={jogador} />
      ))}
    </ul>
  )
}

export default ListaJogadores
