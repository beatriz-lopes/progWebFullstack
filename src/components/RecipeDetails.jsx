import { Box, Button, Modal, Typography } from "@mui/material";

export default function RecipeDetails({ receita, aberto, onFechar }) {
  if (!receita) return null;

  return (
    <Modal open={aberto} onClose={onFechar} aria-labelledby="modal-modal-title">
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: {
            xs: "90%",
            sm: 600,
          },
          maxHeight: "85vh",
          overflowY: "auto",
          bgcolor: "#fffdf7",
          borderRadius: 3,
          boxShadow: 24,
          p: {
            xs: 2.5,
            sm: 4,
          },
        }}
      >
        <Typography
          id="modal-modal-title"
          variant="h5"
          component="h2"
          sx={{
            fontWeight: 700,
            color: "#2e7d32",
            mb: 2,
          }}
        >
          {receita.nome}
        </Typography>

        <Typography
          variant="h6"
          component="h3"
          sx={{
            fontWeight: 600,
            color: "#3f5132",
            mt: 2,
            mb: 1,
          }}
        >
          Ingredients
        </Typography>
        <Box
          component="ul"
          sx={{
            pl: 3,
            mt: 0,
            mb: 2,
          }}
        >
          {receita.ingredientes.map((item, indice) => (
            <li key={indice}>
              <Typography variant="body2" sx={{ mb: 0.5 }}>
                {item.quantidade} {item.unidade} {item.nome}
              </Typography>
            </li>
          ))}
        </Box>

        <Typography
          variant="h6"
          component="h3"
          sx={{
            fontWeight: 600,
            color: "#3f5132",
            mt: 3,
            mb: 1,
          }}
        >
          Instructions
        </Typography>
        <Box
          component="ol"
          sx={{
            pl: 3,
            mt: 0,
          }}
        >
          {receita.modoPreparo.map((passo, indice) => (
            <li key={indice}>
              <Typography
                variant="body2"
                sx={{
                  mb: 1,
                  lineHeight: 1.6,
                }}
              >
                {passo}
              </Typography>
            </li>
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            mt: 3,
          }}
        >
          <Button
            variant="contained"
            onClick={onFechar}
            sx={{
              bgcolor: "#2e7d32",
              "&:hover": {
                bgcolor: "#1b5e20",
              },
            }}
          >
            Fechar
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
