// Pessoa 2: card de uma receita (nome, informações principais e botão "Ver receita").
// Recebe uma receita no formato montado em src/services/recipeApi.js.
import { Card, CardContent, Typography } from '@mui/material';

export default function RecipeCard({ receita }) {
  return (
    <Card>
      <CardContent>
        <Typography variant='h6' component={'div'}>
          {receita.nome}
        </Typography>
        <Typography variant='body2' sx={{ color: 'text.secondary'}}>
          {receita.descricao}
        </Typography>
      </CardContent>
    </Card>
  )
}
