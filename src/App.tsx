import './App.css'

function App() {
  return (
    <>
      <header className="cabecalho" id="inicio">
        <div className="cabecalho-marca">
          <span className="logo">MQ</span>
          <h1 className="cabecalho-titulo">Marmita Quente FC</h1>
        </div>

        <button className="menu-botao" aria-label="Abrir menu">☰</button>

        <nav className="menu">
          <a href="#inicio">Início</a>
          <a href="#elenco">Elenco</a>
          <a href="#jogos">Jogos</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main className="principal">
        <section className="sobre">
          <div className="sobre-foto">⚽</div>

          <div className="sobre-texto">
            <h2 className="sobre-titulo">Bem-vindo ao Marmita Quente FC</h2>
            <p>
              Somos um time de futebol amador do bairro que se reúne todo fim de semana
              para jogar bola, fazer amizade e, claro, buscar a vitória. Conheça nosso
              elenco e venha torcer com a gente!
            </p>
            <a href="#jogos" className="botao">Ver próximos jogos</a>
          </div>
        </section>

        <div className="conteudo">
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

            <ul className="jogadores">
              <li className="jogador">
                <img className="jogador-foto" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Foto de Carlos Silva" />
                <h3 className="jogador-nome">Carlos Silva</h3>
                <span className="jogador-numero">#1</span>
                <div className="jogador-detalhes">
                  <span className="jogador-posicao">Goleiro</span>
                  <span className="jogador-gols">⚽ 0 gols</span>
                </div>
              </li>

              <li className="jogador">
                <img className="jogador-foto" src="https://randomuser.me/api/portraits/men/45.jpg" alt="Foto de Rafael Souza" />
                <h3 className="jogador-nome">Rafael Souza</h3>
                <span className="jogador-numero">#4</span>
                <div className="jogador-detalhes">
                  <span className="jogador-posicao">Zagueiro</span>
                  <span className="jogador-gols">⚽ 1 gol</span>
                </div>
              </li>

              <li className="jogador">
                <img className="jogador-foto" src="https://randomuser.me/api/portraits/men/12.jpg" alt="Foto de Bruno Lima" />
                <h3 className="jogador-nome">Bruno Lima</h3>
                <span className="jogador-numero">#3</span>
                <div className="jogador-detalhes">
                  <span className="jogador-posicao">Zagueiro</span>
                  <span className="jogador-gols">⚽ 2 gols</span>
                </div>
              </li>

              <li className="jogador">
                <img className="jogador-foto" src="https://randomuser.me/api/portraits/men/22.jpg" alt="Foto de Diego Martins" />
                <h3 className="jogador-nome">Diego Martins</h3>
                <span className="jogador-numero">#6</span>
                <div className="jogador-detalhes">
                  <span className="jogador-posicao">Lateral</span>
                  <span className="jogador-gols">⚽ 1 gol</span>
                </div>
              </li>

              <li className="jogador">
                <img className="jogador-foto" src="https://randomuser.me/api/portraits/men/67.jpg" alt="Foto de Lucas Pereira" />
                <h3 className="jogador-nome">Lucas Pereira</h3>
                <span className="jogador-numero">#5</span>
                <div className="jogador-detalhes">
                  <span className="jogador-posicao">Volante</span>
                  <span className="jogador-gols">⚽ 2 gols</span>
                </div>
              </li>

              <li className="jogador">
                <img className="jogador-foto" src="https://randomuser.me/api/portraits/men/41.jpg" alt="Foto de Thiago Rocha" />
                <h3 className="jogador-nome">Thiago Rocha</h3>
                <span className="jogador-numero">#8</span>
                <div className="jogador-detalhes">
                  <span className="jogador-posicao">Meia</span>
                  <span className="jogador-gols">⚽ 3 gols</span>
                </div>
              </li>

              <li className="jogador">
                <img className="jogador-foto" src="https://randomuser.me/api/portraits/men/18.jpg" alt="Foto de João Almeida" />
                <h3 className="jogador-nome">João Almeida</h3>
                <span className="jogador-numero">#10</span>
                <div className="jogador-detalhes">
                  <span className="jogador-posicao">Meia</span>
                  <span className="jogador-gols">⚽ 6 gols</span>
                </div>
              </li>

              <li className="jogador">
                <img className="jogador-foto" src="https://randomuser.me/api/portraits/men/53.jpg" alt="Foto de André Costa" />
                <h3 className="jogador-nome">André Costa</h3>
                <span className="jogador-numero">#7</span>
                <div className="jogador-detalhes">
                  <span className="jogador-posicao">Atacante</span>
                  <span className="jogador-gols">⚽ 5 gols</span>
                </div>
              </li>

              <li className="jogador">
                <img className="jogador-foto" src="https://randomuser.me/api/portraits/men/76.jpg" alt="Foto de Felipe Gomes" />
                <h3 className="jogador-nome">Felipe Gomes</h3>
                <span className="jogador-numero">#9</span>
                <div className="jogador-detalhes">
                  <span className="jogador-posicao">Atacante</span>
                  <span className="jogador-gols">⚽ 8 gols</span>
                </div>
              </li>

              <li className="jogador">
                <img className="jogador-foto" src="https://randomuser.me/api/portraits/men/29.jpg" alt="Foto de Mateus Ribeiro" />
                <h3 className="jogador-nome">Mateus Ribeiro</h3>
                <span className="jogador-numero">#11</span>
                <div className="jogador-detalhes">
                  <span className="jogador-posicao">Atacante</span>
                  <span className="jogador-gols">⚽ 4 gols</span>
                </div>
              </li>
            </ul>
          </section>

          <aside className="jogos" id="jogos">
            <h2 className="secao-titulo">Próximos jogos</h2>

            <ul className="lista-jogos">
              <li className="jogo">
                <div className="jogo-data">
                  <span>SÁB</span>
                  <strong>01</strong>
                  <span>NOV</span>
                </div>
                <h3 className="jogo-adversario">Marmita Quente FC x Leões da Vila</h3>
                <p className="jogo-local">📍 Campo do Bairro · 15h</p>
                <span className="jogo-mando jogo-casa">Casa</span>
              </li>

              <li className="jogo">
                <div className="jogo-data">
                  <span>DOM</span>
                  <strong>09</strong>
                  <span>NOV</span>
                </div>
                <h3 className="jogo-adversario">Marmita Quente FC x Unidos do Morro</h3>
                <p className="jogo-local">📍 Estádio Municipal · 9h</p>
                <span className="jogo-mando jogo-fora">Fora</span>
              </li>

              <li className="jogo">
                <div className="jogo-data">
                  <span>SÁB</span>
                  <strong>15</strong>
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
    </>
  )
}

export default App
