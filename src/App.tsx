import { useState } from 'react'
import './App.css'
import Cabecalho from './components/Cabecalho'
import Sobre from './components/Sobre'
import SecaoElenco from './components/SecaoElenco'
import ProximosJogos from './components/ProximosJogos'
import Rodape from './components/Rodape'
import { jogadores } from './data/jogadores'
import { jogos } from './data/jogos'

function App() {
  const [setorAtivo, setSetorAtivo] = useState('Todos')
  const [busca, setBusca] = useState('')

  const jogadoresFiltrados = jogadores.filter(
    (jogador) =>
      (setorAtivo === 'Todos' || jogador.setor === setorAtivo) &&
      jogador.nome.toLowerCase().includes(busca.toLowerCase())
  )

  return (
    <>
      <Cabecalho />

      <main className="principal">
        <Sobre />

        <div className="conteudo">
          <SecaoElenco
            jogadores={jogadoresFiltrados}
            setorAtivo={setorAtivo}
            onSelecionarSetor={setSetorAtivo}
            busca={busca}
            onBuscar={setBusca}
          />
          <ProximosJogos jogos={jogos} />
        </div>
      </main>

      <Rodape />
    </>
  )
}

export default App
