import type { Jogador } from '../data/jogadores'
import FiltroPosicao from './FiltroPosicao'
import CampoBusca from './CampoBusca'
import ListaJogadores from './ListaJogadores'

type SecaoElencoProps = {
  jogadores: Jogador[]
  setorAtivo: string
  onSelecionarSetor: (setor: string) => void
  busca: string
  onBuscar: (texto: string) => void
}

function SecaoElenco({ jogadores, setorAtivo, onSelecionarSetor, busca, onBuscar }: SecaoElencoProps) {
  return (
    <section className="elenco" id="elenco">
      <div className="secao-topo">
        <h2 className="secao-titulo">Elenco</h2>
        <FiltroPosicao setorAtivo={setorAtivo} onSelecionarSetor={onSelecionarSetor} />
      </div>

      <CampoBusca busca={busca} onBuscar={onBuscar} />
      <ListaJogadores jogadores={jogadores} />
    </section>
  )
}

export default SecaoElenco
