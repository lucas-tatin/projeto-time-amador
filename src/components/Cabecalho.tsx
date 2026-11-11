function Cabecalho() {
  return (
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
  )
}

export default Cabecalho
