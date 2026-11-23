type CampoBuscaProps = {
  busca: string
  onBuscar: (texto: string) => void
}

function CampoBusca({ busca, onBuscar }: CampoBuscaProps) {
  return (
    <input
      className="campo-busca"
      type="text"
      placeholder="🔍 Buscar jogador pelo nome..."
      value={busca}
      onChange={(evento) => onBuscar(evento.target.value)}
    />
  )
}

export default CampoBusca
