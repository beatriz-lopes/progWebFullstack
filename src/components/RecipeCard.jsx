// Pessoa 2: card de uma receita (nome, informações principais e botão "Ver receita").
// Recebe uma receita no formato montado em src/services/recipeApi.js.
import { Button, Card, CardActions, CardContent, Chip, Stack, Typography } from '@mui/material';

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
        <Stack direction='row' spacing={1}>
          <Chip label={receita.dificuldade} variant='outlined'></Chip>
          <Chip label={receita.tipo} variant='outlined'></Chip>
          <Chip label={receita.culinaria} variant='outlined'></Chip>
          {receita.restricoes.map((restricao) => (
            <Chip key={restricao} label={restricao} variant='outlined' />
          ))}
          <Chip label={receita.porcoes} variant='outlined'></Chip>
          <Chip label={receita.tempoPreparo} variant='outlined'></Chip>
          <Chip label={receita.tempoCozimento} variant='outlined'></Chip>
          <Chip label={receita.calorias} variant='outlined'></Chip>
          <Chip label={receita.proteina} variant='outlined'></Chip>
        </Stack>
      </CardContent>
      <CardActions>
        <Button size='small'>Ver receita</Button>
      </CardActions>
    </Card>
  )
}
