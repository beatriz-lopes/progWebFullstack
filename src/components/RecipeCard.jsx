// Pessoa 2: card de uma receita (nome, informações principais e botão "Ver receita").
// Recebe uma receita no formato montado em src/services/recipeApi.js.
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";

export default function RecipeCard({ receita, onVerReceita }) {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 3,
        border: "1px solid #e0e6dc",
        boxShadow: "0 3px 10px rgba(0, 0, 0, 0.08)",
        transition: "0.2s",
        "&:hover": {
          boxShadow: "0 6px 16px rgba(0, 0, 0, 0.14)",
          transform: "translateY(-2px)",
        },
      }}
    >
      <CardContent
        sx={{
          flexGrow: 1,
        }}
      >
        <Typography
          variant="h6"
          component={"div"}
          sx={{
            wordBreak: "break-word",
            color: "#2e7d32",
            fontWeight: 600,
          }}
        >
          {receita.nome}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary", mb: 1.5 }}>
          {receita.descricao}
        </Typography>
        <Stack spacing={1.5} sx={{ mt: 1.5 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, minmax(0, 1fr))",
              },
              gap: 1,
              mt: 1.5,
              width: "100%",
            }}
          >
            <Chip
              label={`Difficulty: ${receita.dificuldade}`}
              variant="outlined"
              sx={{ width: "100%", bgcolor: "#f3f7f1", borderColor: "#b7c9b0" }}
            />

            <Chip
              label={`Cuisine: ${receita.culinaria}`}
              variant="outlined"
              sx={{ width: "100%", bgcolor: "#f3f7f1", borderColor: "#b7c9b0" }}
            />

            <Chip
              label={`Servings: ${receita.porcoes}`}
              variant="outlined"
              sx={{ width: "100%", bgcolor: "#f3f7f1", borderColor: "#b7c9b0" }}
            />

            <Chip
              label={`Prep time: ${receita.tempoPreparo} min`}
              variant="outlined"
              sx={{ width: "100%", bgcolor: "#f3f7f1", borderColor: "#b7c9b0" }}
            />
          </Box>

          {receita.restricoes.length > 0 && (
            <Stack spacing={0.5}>
              <Typography variant="caption" color="text.secondary">
                Dietary restrictions:
              </Typography>

              <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                {receita.restricoes.map((restricao) => (
                  <Chip
                    key={restricao}
                    label={restricao}
                    size="small"
                    sx={{
                      bgcolor: "#fff3e0",
                      border: "1px solid #ffcc80",
                    }}
                  />
                ))}
              </Stack>
            </Stack>
          )}
        </Stack>
      </CardContent>
      <CardActions
        sx={{
          px: 2,
          pb: 2,
          pt: 0,
        }}
      >
        <Button
          size="small"
          variant="contained"
          onClick={() => onVerReceita(receita)}
          sx={{
            bgcolor: "#2e7d32",
            "&:hover": {
              bgcolor: "#1b5e20",
            },
          }}
        >
          View recipe
        </Button>
      </CardActions>
    </Card>
  );
}
