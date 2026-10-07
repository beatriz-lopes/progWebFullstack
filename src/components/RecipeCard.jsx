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
          }}
        >
          {receita.nome}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
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
              label={`Dificuldade: ${receita.dificuldade}`}
              variant="outlined"
              sx={{ width: "100%" }}
            />

            <Chip
              label={`Culinária: ${receita.culinaria}`}
              variant="outlined"
              sx={{ width: "100%" }}
            />

            <Chip
              label={`Porções: ${receita.porcoes}`}
              variant="outlined"
              sx={{ width: "100%" }}
            />

            <Chip
              label={`Preparo: ${receita.tempoPreparo} min`}
              variant="outlined"
              sx={{ width: "100%" }}
            />
          </Box>

          {receita.restricoes.length > 0 && (
            <Stack spacing={0.5}>
              <Typography variant="caption" color="text.secondary">
                Restrições:
              </Typography>

              <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                {receita.restricoes.map((restricao) => (
                  <Chip
                    key={restricao}
                    label={restricao}
                    variant="outlined"
                    size="small"
                  />
                ))}
              </Stack>
            </Stack>
          )}
        </Stack>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onVerReceita(receita)}>
          Ver receita
        </Button>
      </CardActions>
    </Card>
  );
}
