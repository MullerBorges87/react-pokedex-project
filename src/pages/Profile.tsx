import { Chip, Container, Divider, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { PokemonContext } from "../context/PokemonsContext";
import { useQuery } from '@tanstack/react-query';
import api from "../services/api";
import PokemonTable from "../components/PokemonTable";

export const Profile = () => {
  const { setHide, pokemon } = useContext(PokemonContext);
  const navigate = useNavigate();

  useEffect(() => {
    setHide(false)
  }, [setHide])

  const { data, isLoading } = useQuery({
    queryKey: ['Pokemon'],
    queryFn: async () => {
      const response = await api.get(pokemon)
      return response.data
    }
  })

  console.log(data)

  return (
    <>
      <Navbar />
      <Container maxWidth="md">
        <Paper elevation={3}>
          <Box display="flex" flexDirection="column" alignItems="center" p={5}>
            <Typography variant="h4">{!!data && data.name}</Typography>
            <Box
              display="flex"
              alignItems="center"
              width="100%"
              marginBottom="15px"
              sx={{
                flexDirection: {
                  xs: "column",
                  md: "row",
                },
              }}
            >
              <Box component="img" src={!!data && data.sprites && data.sprites.front_default} width="50%" height="100%" />
              <PokemonTable
                height={!!data && data.height}
                weight={!!data && data.weight}
              />
            </Box>
            <Box width="100%">
              <Divider>Variações</Divider>
              <Box display="flex" justifyContent="space-between">
                <Box component="img" src={!!data && data.sprites && data.sprites.front_female} width="25%" height="25%" />
                <Box component="img" src={!!data && data.sprites && data.sprites.front_shiny} width="25%" height="25%" />
                <Box component="img" src={!!data && data.sprites && data.sprites.front_shiny_female} width="25%" height="25%" />
              </Box>

            </Box>
          </Box>
        </Paper>
      </Container>
    </>
  );
};