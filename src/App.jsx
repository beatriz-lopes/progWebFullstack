import { useState } from 'react'
import { Alert, Box, CircularProgress, Container, Typography } from '@mui/material'
import SearchBar from './components/SearchBar'
import RecipeList from './components/RecipeList'
import { buscarReceitas } from './services/recipeApi'

export default function App() {
  const [receitas, setReceitas] = useState([]) // receitas que a API devolveu
  const [carregando, setCarregando] = useState(false) // esperando a API?
  const [erro, setErro] = useState('') // mensagem de erro, se houver
  const [busca, setBusca] = useState('') // último ingrediente pesquisado

  async function handleSearch(ingrediente) {
    setBusca(ingrediente)
    setReceitas([])
    setErro('')
    setCarregando(true)

    try {
      setReceitas(await buscarReceitas(ingrediente))
    } catch (e) {
      setErro(e.message)
    } finally {
      setCarregando(false) // roda com sucesso ou com erro
    }
  }

  const semResultados = busca && !carregando && !erro && receitas.length === 0

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Buscador de Receitas
      </Typography>

      <SearchBar onSearch={handleSearch} carregando={carregando} />

      <Box sx={{ mt: 3 }}>
        {carregando && (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress />
          </Box>
        )}

        {erro && <Alert severity="error">{erro}</Alert>}

        {semResultados && (
          <Alert severity="info">Nenhuma receita encontrada com "{busca}".</Alert>
        )}

        {receitas.length > 0 && <RecipeList receitas={receitas} />}
      </Box>
    </Container>
  )
}
