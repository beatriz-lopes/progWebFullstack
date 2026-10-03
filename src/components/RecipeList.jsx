// Pessoa 2: lista com os resultados da busca.
// Versão provisória, só para testar a busca. Trocar pelos cards (RecipeCard).
export default function RecipeList({ receitas }) {
  return (
    <ul>
      {receitas.map((receita) => (
        <li key={receita.id}>{receita.nome}</li>
      ))}
    </ul>
  )
}
