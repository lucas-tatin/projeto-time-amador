import type { Jogador } from '../data/jogadores'
import ListaJogadores from './ListaJogadores'

type SecaoElencoProps = {
  jogadores: Jogador[]
}

function SecaoElenco({ jogadores }: SecaoElencoProps) {
  return (
    <section className="elenco" id="elenco">
      <div className="secao-topo">
        <h2 className="secao-titulo">Elenco</h2>

        <div className="filtros">
          <button className="filtro filtro-ativo">Todos</button>
          <button className="filtro">Goleiros</button>
          <button className="filtro">Defesa</button>
          <button className="filtro">Meio</button>
          <button className="filtro">Ataque</button>
        </div>
      </div>

      <ListaJogadores jogadores={jogadores} />
    </section>
  )
}

export default SecaoElenco
