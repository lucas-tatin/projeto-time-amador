import './App.css'
import Cabecalho from './components/Cabecalho'
import Sobre from './components/Sobre'
import SecaoElenco from './components/SecaoElenco'
import Rodape from './components/Rodape'
import { jogadores } from './data/jogadores'

function App() {
  return (
    <>
      <Cabecalho />

      <main className="principal">
        <Sobre />

        <div className="conteudo">
          <SecaoElenco jogadores={jogadores} />

          <aside className="jogos" id="jogos">
            <h2 className="secao-titulo">Próximos jogos</h2>

            <ul className="lista-jogos">
              <li className="jogo">
                <div className="jogo-data">
                  <span>SÁB</span>
                  <strong>14</strong>
                  <span>NOV</span>
                </div>
                <h3 className="jogo-adversario">Marmita Quente FC x Leões da Vila</h3>
                <p className="jogo-local">📍 Campo do Bairro · 15h</p>
                <span className="jogo-mando jogo-casa">Casa</span>
              </li>

              <li className="jogo">
                <div className="jogo-data">
                  <span>DOM</span>
                  <strong>22</strong>
                  <span>NOV</span>
                </div>
                <h3 className="jogo-adversario">Marmita Quente FC x Unidos do Morro</h3>
                <p className="jogo-local">📍 Estádio Municipal · 9h</p>
                <span className="jogo-mando jogo-fora">Fora</span>
              </li>

              <li className="jogo">
                <div className="jogo-data">
                  <span>SÁB</span>
                  <strong>28</strong>
                  <span>NOV</span>
                </div>
                <h3 className="jogo-adversario">Marmita Quente FC x Real Esperança</h3>
                <p className="jogo-local">📍 Campo do Bairro · 16h</p>
                <span className="jogo-mando jogo-casa">Casa</span>
              </li>
            </ul>
          </aside>
        </div>
      </main>

      <Rodape />
    </>
  )
}

export default App
