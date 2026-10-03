// Toda a comunicação com a Recipe API fica neste arquivo.
// Documentação: https://recipeapi.io/docs/resources/recipes/

const BASE_URL = 'https://recipeapi.io/api/v1'

// A chave vem do arquivo .env (veja o README)
const API_KEY = import.meta.env.VITE_RECIPE_API_KEY

// Mensagens amigáveis para os erros mais comuns da API
const MENSAGENS_DE_ERRO = {
  401: 'Chave da API inválida. Confira o arquivo .env.',
  429: 'Limite de buscas da API atingido. Tente de novo mais tarde.',
}

// Busca receitas que levam o ingrediente digitado.
// Aceita mais de um, separado por vírgula: "chicken, potato".
export async function buscarReceitas(ingrediente) {
  if (!API_KEY) {
    throw new Error('Chave da API não configurada. Veja o passo a passo no README.')
  }

  // " chicken ,potato " vira "chicken,potato"
  const ingredientes = ingrediente
    .split(',')
    .map((nome) => nome.trim())
    .filter(Boolean)
    .join(',')

  const url = `${BASE_URL}/recipes?ingredients=${encodeURIComponent(ingredientes)}`

  let resposta
  try {
    resposta = await fetch(url, {
      headers: { Authorization: `Bearer ${API_KEY}` },
    })
  } catch {
    // fetch só falha aqui quando não consegue nem falar com o servidor
    throw new Error('Não foi possível conectar à API. Verifique sua internet.')
  }

  if (!resposta.ok) {
    throw new Error(
      MENSAGENS_DE_ERRO[resposta.status] ??
        `Erro ao buscar receitas (código ${resposta.status}).`,
    )
  }

  const json = await resposta.json()
  return json.data.map(organizarReceita)
}

// Converte uma receita do formato da API (em inglês) para o formato do nosso app.
// Assim o resto do app não depende dos nomes que a API usa.
function organizarReceita(receita) {
  return {
    id: receita.id,
    nome: receita.name,
    descricao: receita.description,
    dificuldade: receita.difficulty, // easy, medium ou hard
    tipo: receita.meal_type, // main, dessert, soup...
    culinaria: receita.cuisine, // italian, mexican...
    restricoes: receita.dietary_tags ?? [], // vegan, gluten_free...
    porcoes: receita.servings,
    tempoPreparo: receita.prep_time, // em minutos
    tempoCozimento: receita.cook_time, // em minutos
    calorias: receita.calories_per_serving, // por porção
    proteina: receita.protein, // em gramas
    ingredientes: (receita.ingredients ?? []).map((item) => ({
      nome: item.name,
      quantidade: item.quantity,
      unidade: item.unit,
      opcional: item.optional,
    })),
    modoPreparo: receita.instructions ?? [], // lista de passos
  }
}
