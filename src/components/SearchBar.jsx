import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";

// Campo de busca: guarda o que a pessoa digita e avisa o App quando ela busca.
// - onSearch: função chamada com o ingrediente digitado
// - carregando: true enquanto a API responde (o botão mostra um loading)
// - inputRef: ref do campo, usada pelo App para dar foco (useRef)
export default function SearchBar({ onSearch, carregando, inputRef }) {
  const [ingrediente, setIngrediente] = useState("");

  function handleSubmit(event) {
    event.preventDefault(); // impede o navegador de recarregar a página (SPA)
    const texto = ingrediente.trim();
    if (texto) onSearch(texto);
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        gap: 2,
        alignItems: "flex-start",
        flexDirection: {
          xs: "column",
          sm: "row",
        },
      }}
    >
      <TextField
        label="What ingredients do you have?"
        placeholder="ex.: chicken, potato"
        helperText="Enter ingredients in English. Separate multiple ingredients with commas."
        value={ingrediente}
        onChange={(event) => setIngrediente(event.target.value)}
        inputRef={inputRef}
        fullWidth
        sx={{
          "& label.Mui-focused": {
            color: "#2e7d32",
          },
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "#2e7d32",
            },
          },
        }}
      />
      <Button
        type="submit"
        variant="contained"
        loading={carregando}
        sx={{
          bgcolor: "#2e7d32",
          "&:hover": {
            bgcolor: "#1b5e20",
          },
          minWidth: {
            xs: "100%",
            sm: 120,
          },
          height: 56,
        }}
      >
        Search
      </Button>
    </Box>
  );
}
