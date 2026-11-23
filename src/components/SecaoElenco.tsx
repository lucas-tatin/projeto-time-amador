import type { Jogador } from '../data/jogadores'
import FiltroPosicao from './FiltroPosicao'
import CampoBusca from './CampoBusca'
import ListaJogadores from './ListaJogadores'

type SecaoElencoProps = {
  jogadores: Jogador[]
  carregando: boolean
  setorAtivo: string
  onSelecionarSetor: (setor: string) => void
  busca: string
  onBuscar: (texto: string) => void
}

function SecaoElenco({ jogadores, carregando, setorAtivo, onSelecionarSetor, busca, onBuscar }: SecaoElencoProps) {
  return (
    <section className="elenco" id="elenco">
      <div className="secao-topo">
        <h2 className="secao-titulo">Elenco</h2>
        <FiltroPosicao setorAtivo={setorAtivo} onSelecionarSetor={onSelecionarSetor} />
      </div>

      <CampoBusca busca={busca} onBuscar={onBuscar} />

      {carregando ? (
        <div className="estado-carregando">
          <span className="carregando-bola">⚽</span>
          <p>Carregando elenco...</p>
        </div>
      ) : (
        <ListaJogadores jogadores={jogadores} />
      )}
    </section>
  )
}

export default SecaoElenco
