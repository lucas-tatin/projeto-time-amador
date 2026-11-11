import type { Jogo } from '../data/jogos'

type CardJogoProps = {
  jogo: Jogo
}

function CardJogo({ jogo }: CardJogoProps) {
  const classeMando = jogo.mando === 'Casa' ? 'jogo-casa' : 'jogo-fora'

  return (
    <li className="jogo">
      <div className="jogo-data">
        <span>{jogo.diaSemana}</span>
        <strong>{jogo.dia}</strong>
        <span>{jogo.mes}</span>
      </div>
      <h3 className="jogo-adversario">Marmita Quente FC x {jogo.adversario}</h3>
      <p className="jogo-local">📍 {jogo.local} · {jogo.horario}</p>
      <span className={`jogo-mando ${classeMando}`}>{jogo.mando}</span>
    </li>
  )
}

export default CardJogo
