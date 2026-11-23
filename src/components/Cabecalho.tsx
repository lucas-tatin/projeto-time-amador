type CabecalhoProps = {
  modoEscuro: boolean
  onAlternarTema: () => void
}

function Cabecalho({ modoEscuro, onAlternarTema }: CabecalhoProps) {
  return (
    <header className="cabecalho" id="inicio">
      <div className="cabecalho-marca">
        <span className="logo">MQ</span>
        <h1 className="cabecalho-titulo">Marmita Quente FC</h1>
      </div>

      <div className="cabecalho-acoes">
        <nav className="menu">
          <a href="#inicio">Início</a>
          <a href="#elenco">Elenco</a>
          <a href="#jogos">Jogos</a>
          <a href="#contato">Contato</a>
        </nav>

        <button
          className="tema-botao"
          onClick={onAlternarTema}
          aria-label={modoEscuro ? 'Ativar modo claro' : 'Ativar modo escuro'}
        >
          {modoEscuro ? '☀️' : '🌙'}
        </button>

        <button className="menu-botao" aria-label="Abrir menu">☰</button>
      </div>
    </header>
  )
}

export default Cabecalho
