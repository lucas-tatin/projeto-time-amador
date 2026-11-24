# Projeto Time Amador

Site do Marmita Quente FC, um time de futebol amador do bairro. A ideia é ter uma página simples onde a galera possa conhecer o time, ver quem faz parte do elenco (com foto, posição, número da camisa e gols de cada jogador) e acompanhar os próximos jogos, com data, adversário, local e horário. O projeto está sendo feito com React, TypeScript e CSS como trabalho de conclusão da disciplina.

## Como executar

É preciso ter o [Node.js](https://nodejs.org) instalado.

```bash
npm install
npm run dev
```

Depois é só abrir o endereço que aparecer no terminal (normalmente `http://localhost:5173`).

## Fonte dos dados

- **Elenco (listagem principal):** vem do arquivo [`public/jogadores.json`](public/jogadores.json), carregado com `fetch` quando a página abre. Enquanto os dados não chegam aparece uma mensagem de carregando, e se der erro aparece um aviso para o usuário.
- **Próximos jogos (listagem secundária):** vêm do vetor declarado em [`src/data/jogos.ts`](src/data/jogos.ts).
- **Fotos dos jogadores:** [randomuser.me](https://randomuser.me), um site de fotos para preencher protótipos.
