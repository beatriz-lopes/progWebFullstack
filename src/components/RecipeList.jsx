// Pessoa 2: lista com os resultados da busca.
// Versão provisória, só para testar a busca. Trocar pelos cards (RecipeCard).
import { Box } from '@mui/material'
import RecipeCard from './RecipeCard'

export default function RecipeList({ receitas }) {
  return (
    <Box component='section' sx={{ p: 2 }}>
      {receitas.map((receita) => (
        <RecipeCard key={receita.id} receita={receita} />
      ))}
    </Box>
  )
}
