import type { Jogador } from '../data/jogadores'
import FiltroPosicao from './FiltroPosicao'
import CampoBusca from './CampoBusca'
import ListaJogadores from './ListaJogadores'

type SecaoElencoProps = {
  jogadores: Jogador[]
  carregando: boolean
  erro: string
  setorAtivo: string
  onSelecionarSetor: (setor: string) => void
  busca: string
  onBuscar: (texto: string) => void
}

function SecaoElenco({ jogadores, carregando, erro, setorAtivo, onSelecionarSetor, busca, onBuscar }: SecaoElencoProps) {
  function renderizarConteudo() {
    if (carregando) {
      return (
        <div className="estado-carregando">
          <span className="carregando-bola">⚽</span>
          <p>Carregando elenco...</p>
        </div>
      )
    }

    if (erro) {
      return (
        <div className="estado-erro">
          <strong>😕 Ops! Algo deu errado.</strong>
          <p>{erro}</p>
        </div>
      )
    }

    return <ListaJogadores jogadores={jogadores} />
  }

  return (
    <section className="elenco" id="elenco">
      <div className="secao-topo">
        <h2 className="secao-titulo">Elenco</h2>
        <FiltroPosicao setorAtivo={setorAtivo} onSelecionarSetor={onSelecionarSetor} />
      </div>

      <CampoBusca busca={busca} onBuscar={onBuscar} />

      {renderizarConteudo()}
    </section>
  )
}

export default SecaoElenco
