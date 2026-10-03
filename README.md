# Buscador de Receitas por Ingrediente

Projeto 1 da disciplina **Programação Web Fullstack**.

Aplicação web feita com React.js em que a pessoa digita um ingrediente que tem em casa (por exemplo `chicken` ou `potato`) e vê receitas que usam esse ingrediente, buscadas na [Recipe API](https://recipeapi.io). Tudo acontece em uma única página (SPA): a tela atualiza sem recarregar.

## Como funciona

1. A pessoa digita um ou mais ingredientes e clica em **Buscar**.
2. O React envia o texto para a Recipe API usando `fetch` (AJAX).
3. A API devolve as receitas em JSON.
4. As receitas aparecem na tela (até 10 por busca no plano grátis).
5. Enquanto espera, aparece um carregando. Se der erro ou não houver receitas, aparece uma mensagem.

## Requisitos do professor

| Requisito | O que usamos |
| --- | --- |
| Frontend com React.js | React 19 criado com Vite |
| SPA (uma página só) | Toda a aplicação roda dentro do `App.jsx` |
| API JSON aberta | [Recipe API](https://recipeapi.io/docs/) |
| AJAX | `fetch()` em `src/services/recipeApi.js` |
| Hook da lista do professor | `useRef` (foco automático no campo de busca), _em andamento_ |
| Biblioteca externa | [Material UI](https://mui.com/material-ui/) |
| Repositório público no GitHub | este repositório |

## Como rodar o projeto

**Você precisa ter:** [Node.js](https://nodejs.org) 20.19 ou mais novo (de preferência a versão LTS) e o Git.

1. Clone o repositório e entre na pasta:

   ```bash
   git clone https://github.com/beatriz-lopes/progWebFullstack.git
   cd progWebFullstack
   ```

2. Instale as dependências (só na primeira vez):

   ```bash
   npm install
   ```

3. Crie sua chave da API (é grátis e não pede cartão):
   - crie uma conta em <https://recipeapi.io/register>;
   - no Dashboard, gere uma API key (ela começa com `sk_live_`).

4. Copie o arquivo `.env.example` para um arquivo novo chamado `.env` e cole sua chave nele:

   ```
   VITE_RECIPE_API_KEY=sk_live_sua_chave_aqui
   ```

5. Rode o projeto:

   ```bash
   npm run dev
   ```

6. Abra <http://localhost:5173> no navegador.

> **Importante:** o arquivo `.env` nunca vai para o GitHub (ele está no `.gitignore`). Cada integrante cria o seu.

## Dicas de uso

- **Digite em inglês.** As receitas da API são em inglês, então `chicken` funciona e `frango` não.
- Para buscar com mais de um ingrediente, separe por vírgula: `chicken, potato`.
- O plano grátis da API permite **500 buscas por mês**, somando todo mundo que usa a mesma chave. Evite ficar testando sem necessidade.

## Estrutura do projeto

```
src/
├── App.jsx                 tela principal: junta busca, mensagens e resultados
├── main.jsx                ponto de entrada do React
├── components/
│   ├── SearchBar.jsx       campo de busca
│   ├── RecipeList.jsx      lista de resultados
│   ├── RecipeCard.jsx      card de cada receita
│   └── RecipeDetails.jsx   detalhes da receita (ingredientes e preparo)
└── services/
    └── recipeApi.js        conversa com a Recipe API
```

### Formato de uma receita

O `recipeApi.js` traduz a resposta da API para este formato, que é o que os componentes recebem:

```js
{
  id: 449,
  nome: 'Beef Tostadas',
  descricao: '...',
  dificuldade: 'easy',      // easy, medium ou hard
  tipo: 'main',             // main, dessert, soup...
  culinaria: 'american',
  restricoes: ['nut_free'], // vegan, gluten_free...
  porcoes: 6,
  tempoPreparo: 15,         // minutos
  tempoCozimento: 15,       // minutos
  calorias: 450,            // por porção
  proteina: 25,             // gramas
  ingredientes: [{ nome: 'Garlic', quantidade: 2, unidade: 'clove', opcional: false }],
  modoPreparo: ['Heat the vegetable oil...', '...'],
}
```

A lista de resultados já vem com ingredientes e modo de preparo, então a tela de detalhes não precisa fazer outra chamada à API.

## Divisão da equipe

| Integrante | Parte | Arquivos principais |
| --- | --- | --- |
| Pessoa 1: Fabio | Busca e integração com a API: campo de pesquisa, chamada com `fetch`, carregando, erro, sem resultados e organização dos dados | `SearchBar.jsx`, `recipeApi.js`, parte do `App.jsx` |
| Pessoa 2: _(nome)_ | Exibição das receitas: cards, lista, botão "Ver receita" e detalhes | `RecipeCard.jsx`, `RecipeList.jsx`, `RecipeDetails.jsx` |
| Pessoa 3: Beatriz | Interface e requisitos extras: Material UI, layout, responsividade, `useRef`, cabeçalho e acabamento visual | `Header.jsx`, tema/estilo, parte do `App.jsx` |

## Comandos

| Comando | O que faz |
| --- | --- |
| `npm run dev` | roda o projeto em modo de desenvolvimento |
| `npm run build` | gera a versão final na pasta `dist/` |
| `npm run preview` | abre a versão final gerada pelo build |
| `npm run lint` | procura erros comuns no código |

## Problemas comuns

- **"Chave da API não configurada"**: o arquivo `.env` não existe ou está com outro nome. Depois de criar ou mudar o `.env`, pare o `npm run dev` (Ctrl + C) e rode de novo.
- **"Chave da API inválida"**: confira se a chave foi copiada inteira, sem espaços.
- **"Limite de buscas da API atingido"**: acabaram as 500 buscas do mês, ou foram muitas buscas seguidas. Espere um pouco ou use a chave de outro integrante.
- **`npm install` muito lento ou com erro `EPERM`**: o OneDrive pode estar sincronizando a pasta `node_modules`. Deixe o projeto numa pasta fora do OneDrive (por exemplo `C:\dev`).

## Uso de ferramentas de apoio (IA)

A disciplina pede que o uso de IA seja documentado.

- **Claude (Anthropic)**: usado como copiloto para planejar o desenvolvimento, criar a base do projeto, escrever a primeira versão da busca (`recipeApi.js`, `SearchBar.jsx` e parte do `App.jsx`) e este README. Todo código feito com ajuda da IA passa pela revisão da equipe. Os commits feitos com ajuda da IA trazem a linha `Co-Authored-By: Claude`.
- _(Adicione aqui as outras ferramentas que a equipe usar.)_
