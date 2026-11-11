import type { Jogador } from '../data/jogadores'
import FiltroPosicao from './FiltroPosicao'
import ListaJogadores from './ListaJogadores'

type SecaoElencoProps = {
  jogadores: Jogador[]
  setorAtivo: string
  onSelecionarSetor: (setor: string) => void
}

function SecaoElenco({ jogadores, setorAtivo, onSelecionarSetor }: SecaoElencoProps) {
  return (
    <section className="elenco" id="elenco">
      <div className="secao-topo">
        <h2 className="secao-titulo">Elenco</h2>
        <FiltroPosicao setorAtivo={setorAtivo} onSelecionarSetor={onSelecionarSetor} />
      </div>

      <ListaJogadores jogadores={jogadores} />
    </section>
  )
}

export default SecaoElenco
