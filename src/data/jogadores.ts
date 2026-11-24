export type Jogador = {
  id: number
  nome: string
  posicao: string
  setor: string
  numero: number
  gols: number
  foto: string
}

// busca o elenco no arquivo public/jogadores.json
export function buscarJogadores(): Promise<Jogador[]> {
  return fetch('/jogadores.json').then((resposta) => {
    if (!resposta.ok) {
      throw new Error('Não foi possível buscar o elenco')
    }
    return resposta.json()
  })
}
