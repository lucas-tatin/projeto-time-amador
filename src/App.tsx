import { useEffect, useState } from 'react'
import './App.css'
import Cabecalho from './components/Cabecalho'
import Sobre from './components/Sobre'
import SecaoElenco from './components/SecaoElenco'
import ProximosJogos from './components/ProximosJogos'
import Rodape from './components/Rodape'
import { buscarJogadores } from './data/jogadores'
import type { Jogador } from './data/jogadores'
import { jogos } from './data/jogos'

function App() {
  const [jogadores, setJogadores] = useState<Jogador[]>([])
  const [carregando, setCarregando] = useState(true)
  const [setorAtivo, setSetorAtivo] = useState('Todos')
  const [busca, setBusca] = useState('')
  const [modoEscuro, setModoEscuro] = useState(false)

  // carrega o elenco uma vez, quando a página abre
  useEffect(() => {
    buscarJogadores()
      .then((dados) => setJogadores(dados))
      .finally(() => setCarregando(false))
  }, [])

  const jogadoresFiltrados = jogadores.filter(
    (jogador) =>
      (setorAtivo === 'Todos' || jogador.setor === setorAtivo) &&
      jogador.nome.toLowerCase().includes(busca.toLowerCase())
  )

  return (
    <div className={modoEscuro ? 'app tema-escuro' : 'app'}>
      <Cabecalho modoEscuro={modoEscuro} onAlternarTema={() => setModoEscuro(!modoEscuro)} />

      <main className="principal">
        <Sobre />

        <div className="conteudo">
          <SecaoElenco
            jogadores={jogadoresFiltrados}
            carregando={carregando}
            setorAtivo={setorAtivo}
            onSelecionarSetor={setSetorAtivo}
            busca={busca}
            onBuscar={setBusca}
          />
          <ProximosJogos jogos={jogos} />
        </div>
      </main>

      <Rodape />
    </div>
  )
}

export default App
