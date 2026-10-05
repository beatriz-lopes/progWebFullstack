// Pessoa 2: lista com os resultados da busca.
// Versão provisória, só para testar a busca. Trocar pelos cards (RecipeCard).
import { useState } from 'react'
import { Box } from '@mui/material'
import RecipeCard from './RecipeCard'
import RecipeDetails from './RecipeDetails'

export default function RecipeList({ receitas }) {
  const [receitaSelecionada, setReceitaSelecionada] = useState(null)
  const [aberto, setAberto] = useState(false)

  function handleVerReceita(receita) {
    setReceitaSelecionada(receita)
    setAberto(true)
  }

  function handleFechar() {
    setAberto(false)
  }

  return (
    <Box component='section' sx={{ p: 2 }}>
      {receitas.map((receita) => (
        <RecipeCard
          key={receita.id}
          receita={receita}
          onVerReceita={handleVerReceita}
        />
      ))}

      <RecipeDetails
        receita={receitaSelecionada}
        aberto={aberto}
        onFechar={handleFechar}
      />
    </Box>
  )
}
