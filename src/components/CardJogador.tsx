import type { Jogador } from '../data/jogadores'

type CardJogadorProps = {
  jogador: Jogador
}

function CardJogador({ jogador }: CardJogadorProps) {
  return (
    <li className="jogador">
      <img className="jogador-foto" src={jogador.foto} alt={`Foto de ${jogador.nome}`} />
      <h3 className="jogador-nome">{jogador.nome}</h3>
      <span className="jogador-numero">#{jogador.numero}</span>
      <div className="jogador-detalhes">
        <span className="jogador-posicao">{jogador.posicao}</span>
        <span className="jogador-gols">⚽ {jogador.gols} {jogador.gols === 1 ? 'gol' : 'gols'}</span>
      </div>
    </li>
  )
}

export default CardJogador
