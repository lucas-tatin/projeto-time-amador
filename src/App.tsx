import './App.css'
import Cabecalho from './components/Cabecalho'
import Sobre from './components/Sobre'
import SecaoElenco from './components/SecaoElenco'
import ProximosJogos from './components/ProximosJogos'
import Rodape from './components/Rodape'
import { jogadores } from './data/jogadores'
import { jogos } from './data/jogos'

function App() {
  return (
    <>
      <Cabecalho />

      <main className="principal">
        <Sobre />

        <div className="conteudo">
          <SecaoElenco jogadores={jogadores} />
          <ProximosJogos jogos={jogos} />
        </div>
      </main>

      <Rodape />
    </>
  )
}

export default App
