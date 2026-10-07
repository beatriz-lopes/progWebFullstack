import { Box, Typography } from '@mui/material'

export default function Header() {
  return (
    <Box
      component="header"
      sx={{
        textAlign: 'center',
        mb: 4,
        py: 3,
        px: 2,
        borderRadius: 3,
        bgcolor: '#f3f7f1',
        border: '1px solid #d7e3d2',
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{
          fontWeight: 700,
          color: '#2e7d32',
          mb: 1,
        }}
      >
        Buscador de Receitas
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: 'text.secondary',
          maxWidth: 600,
          mx: 'auto',
        }}
      >
        Encontre receitas usando os ingredientes que você tem em casa.
      </Typography>
    </Box>
  )
}