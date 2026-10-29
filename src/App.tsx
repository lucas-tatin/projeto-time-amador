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
      </main>
    </>
  )
}

export default App
