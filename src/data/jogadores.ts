export type Jogador = {
  id: number
  nome: string
  posicao: string
  setor: string
  numero: number
  gols: number
  foto: string
}

export const jogadores: Jogador[] = [
  { id: 1, nome: 'Carlos Silva', posicao: 'Goleiro', setor: 'Goleiros', numero: 1, gols: 0, foto: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { id: 2, nome: 'Rafael Souza', posicao: 'Zagueiro', setor: 'Defesa', numero: 4, gols: 1, foto: 'https://randomuser.me/api/portraits/men/45.jpg' },
  { id: 3, nome: 'Bruno Lima', posicao: 'Zagueiro', setor: 'Defesa', numero: 3, gols: 2, foto: 'https://randomuser.me/api/portraits/men/12.jpg' },
  { id: 4, nome: 'Diego Martins', posicao: 'Lateral', setor: 'Defesa', numero: 6, gols: 1, foto: 'https://randomuser.me/api/portraits/men/22.jpg' },
  { id: 5, nome: 'Lucas Pereira', posicao: 'Volante', setor: 'Meio', numero: 5, gols: 2, foto: 'https://randomuser.me/api/portraits/men/67.jpg' },
  { id: 6, nome: 'Thiago Rocha', posicao: 'Meia', setor: 'Meio', numero: 8, gols: 3, foto: 'https://randomuser.me/api/portraits/men/41.jpg' },
  { id: 7, nome: 'João Almeida', posicao: 'Meia', setor: 'Meio', numero: 10, gols: 6, foto: 'https://randomuser.me/api/portraits/men/18.jpg' },
  { id: 8, nome: 'André Costa', posicao: 'Atacante', setor: 'Ataque', numero: 7, gols: 5, foto: 'https://randomuser.me/api/portraits/men/53.jpg' },
  { id: 9, nome: 'Felipe Gomes', posicao: 'Atacante', setor: 'Ataque', numero: 9, gols: 8, foto: 'https://randomuser.me/api/portraits/men/76.jpg' },
  { id: 10, nome: 'Mateus Ribeiro', posicao: 'Atacante', setor: 'Ataque', numero: 11, gols: 4, foto: 'https://randomuser.me/api/portraits/men/29.jpg' },
  { id: 11, nome: 'Gabriel Santos', posicao: 'Lateral', setor: 'Defesa', numero: 2, gols: 0, foto: 'https://randomuser.me/api/portraits/men/36.jpg' },
  { id: 12, nome: 'Pedro Henrique', posicao: 'Goleiro', setor: 'Goleiros', numero: 12, gols: 0, foto: 'https://randomuser.me/api/portraits/men/85.jpg' },
]
