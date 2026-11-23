export type Jogo = {
  id: number
  diaSemana: string
  dia: string
  mes: string
  adversario: string
  local: string
  horario: string
  mando: string
}

export const jogos: Jogo[] = [
  { id: 1, diaSemana: 'SÁB', dia: '14', mes: 'NOV', adversario: 'Leões da Vila', local: 'Campo do Bairro', horario: '15h', mando: 'Casa' },
  { id: 2, diaSemana: 'DOM', dia: '22', mes: 'NOV', adversario: 'Unidos do Morro', local: 'Estádio Municipal', horario: '9h', mando: 'Fora' },
  { id: 3, diaSemana: 'SÁB', dia: '28', mes: 'NOV', adversario: 'Real Esperança', local: 'Campo do Bairro', horario: '16h', mando: 'Casa' },
]
