type FiltroPosicaoProps = {
  setorAtivo: string
  onSelecionarSetor: (setor: string) => void
}

const setores = ['Todos', 'Goleiros', 'Defesa', 'Meio', 'Ataque']

function FiltroPosicao({ setorAtivo, onSelecionarSetor }: FiltroPosicaoProps) {
  return (
    <div className="filtros">
      {setores.map((setor) => (
        <button
          key={setor}
          className={setor === setorAtivo ? 'filtro filtro-ativo' : 'filtro'}
          onClick={() => onSelecionarSetor(setor)}
        >
          {setor}
        </button>
      ))}
    </div>
  )
}

export default FiltroPosicao
