import { useState } from 'react'
import { Box, Button, TextField } from '@mui/material'

// Campo de busca: guarda o que a pessoa digita e avisa o App quando ela busca.
// - onSearch: função chamada com o ingrediente digitado
// - carregando: true enquanto a API responde (o botão mostra um loading)
// - inputRef: ref do campo, usada pelo App para dar foco (useRef)
export default function SearchBar({ onSearch, carregando, inputRef }) {
  const [ingrediente, setIngrediente] = useState('')

  function handleSubmit(event) {
    event.preventDefault() // impede o navegador de recarregar a página (SPA)
    const texto = ingrediente.trim()
    if (texto) onSearch(texto)
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}
    >
      <TextField
        label="O que você tem em casa?"
        placeholder="ex.: chicken, potato"
        helperText="Digite em inglês. Para mais de um ingrediente, separe por vírgula."
        value={ingrediente}
        onChange={(event) => setIngrediente(event.target.value)}
        inputRef={inputRef}
        fullWidth
      />
      <Button
        type="submit"
        variant="contained"
        loading={carregando}
        sx={{ height: 56, px: 4 }}
      >
        Buscar
      </Button>
    </Box>
  )
}
