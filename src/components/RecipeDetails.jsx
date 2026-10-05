// Pessoa 2: detalhes da receita (ingredientes e modo de preparo), em tela ou modal.

import { Box, Button, Modal, Typography } from "@mui/material";

// Recebe uma receita no formato montado em src/services/recipeApi.js.
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  maxWidth: '90vw',
  maxHeight: '90vh',
  overflowY: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export default function RecipeDetails({ receita, aberto, onFechar }) {
  if (!receita) return null

  return (
    <Modal
      open={aberto}
      onClose={onFechar}
      aria-labelledby='modal-modal-title'
    >
      <Box sx={style}>
        <Typography id='modal-modal-title' variant='h6' component='h2'>
          {receita.nome}
        </Typography>

        <Typography variant='h6' component='h3'>
          Ingredients
        </Typography>
        <ul>
          {receita.ingredientes.map((item, indice) => (
            <li key={indice}>
              {item.quantidade} {item.unidade} {item.nome}
            </li>
          ))}
        </ul>

        <Typography variant='h6' component='h3'>
          Instructions
        </Typography>
        <ol>
          {receita.modoPreparo.map((passo, indice) => (
            <li key={indice}>{passo}</li>
          ))}
        </ol>

        <Button onClick={onFechar}>Fechar</Button>
      </Box>
    </Modal>
  )
}
