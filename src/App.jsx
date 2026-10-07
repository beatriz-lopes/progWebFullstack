import { useState, useRef, useEffect } from "react";
import { Alert, Box, CircularProgress, Container } from "@mui/material";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import Header from "./components/Header";
import { buscarReceitas } from "./services/recipeApi";

export default function App() {
  const [receitas, setReceitas] = useState([]); // receitas que a API devolveu
  const [carregando, setCarregando] = useState(false); // esperando a API?
  const [erro, setErro] = useState(""); // mensagem de erro, se houver
  const [busca, setBusca] = useState(""); // último ingrediente pesquisado

  const inputBuscaRef = useRef(null);

  useEffect(() => {
    inputBuscaRef.current?.focus();
  }, []);

  async function handleSearch(ingrediente) {
    setBusca(ingrediente);
    setReceitas([]);
    setErro("");
    setCarregando(true);

    try {
      setReceitas(await buscarReceitas(ingrediente));
    } catch (e) {
      setErro(e.message);
    } finally {
      setCarregando(false); // roda com sucesso ou com erro
      inputBuscaRef.current?.focus();
    }
  }

  const semResultados = busca && !carregando && !erro && receitas.length === 0;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#fafcf8",
        py: 4,
      }}
    >
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Header />

        <SearchBar
          onSearch={handleSearch}
          carregando={carregando}
          inputRef={inputBuscaRef}
        />

        <Box sx={{ mt: 3 }}>
          {carregando && (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <CircularProgress />
            </Box>
          )}

          {erro && <Alert severity="error">{erro}</Alert>}

          {semResultados && (
            <Alert severity="info">
              Nenhuma receita encontrada com "{busca}".
            </Alert>
          )}

          {receitas.length > 0 && <RecipeList receitas={receitas} />}
        </Box>
      </Container>
    </Box>
  );
}
