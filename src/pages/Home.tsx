import { useContext, useEffect, useState } from 'react';
import { Container, Grid } from "@mui/material";
import PokemonCard from "../components/Card";
import Navbar from "../components/Navbar";
import { Skeletons } from '../components/Skeletons';
import { PokemonContext } from '../context/PokemonsContext';
import api from '../services/api';
import {useNavigate} from 'react-router-dom';

type PokemonType = {
  slot: number,
  type: {
    name: string,
    url: string,
  },
}

type Pokemon = {
  name: string,
  url: string,
  id: number,
  sprites: {
    front_default: string,
  },
  types: PokemonType[]
}

type Request = {
  id: number,
  url: string,
  sprites: {
    front_default: string,
  }
  types: PokemonType[],
}

export default function Home() {
  const { search, setHide, pokemon, setPokemon } = useContext(PokemonContext);
  const [isLoading, setIsloading] = useState(true);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
 
  const navigate = useNavigate()

  useEffect(() => {
    async function getAllPokemons() {
      const response = await api.get('/pokemon?limit=150')
      console.log('valores', response)
      const { results } = response.data;
      const data = await Promise.all(
        results.map(async (pokemon: Pokemon) => {
          const { id, types, sprites, url } = await getMoreInfo(pokemon.url)
          return {
            name: pokemon.name,
            id,
            types,
            sprites,
            url,
          }
        })
      )
      setPokemons(data)
      setIsloading(false)
    }
    getAllPokemons()
    setHide(true)
  }, [setHide])


  async function getMoreInfo(url: string): Promise<Request> {
    const response = await api.get(url);
    const { id, types, sprites } = response.data;
    return {
      id, types, sprites, url
    }
  }

  return (
    <>
      <Navbar />
      <Container maxWidth='xl'>
        {
          isLoading ? <Skeletons /> :
            <Grid container spacing={3}>
              {pokemons.filter((e: Pokemon) => e.name.toLowerCase().includes(search.toLowerCase())).map(e => (
                <Grid onClick={() => {
                  setPokemon(e.url)
                  navigate('/Profile')  
                }} 
                  key={Math.random()} 
                  item 
                  xs={12} 
                  sm={6} 
                  md={4} 
                  lg={2}
                  >
                    <PokemonCard
                      url={e.url}
                      name={e.name}
                      image={e.sprites.front_default}
                      types={e.types}
                    />
                 </Grid>
              ))}
            </Grid>
        }
      </Container>
    </>
  )
}
