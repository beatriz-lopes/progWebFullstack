import { Box, Typography } from '@mui/material'

export default function Header() {
  return (
    <Box
      component="header"
      sx={{
        textAlign: 'center',
        mb: 4,
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        sx={{
          fontWeight: 700,
          mb: 1,
        }}
      >
        Buscador de Receitas
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: 'text.secondary',
        }}
      >
        Encontre receitas usando os ingredientes que você tem em casa.
      </Typography>
    </Box>
  )
}