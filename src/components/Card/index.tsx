import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useContext } from 'react';
import { PokemonContext } from '../../context/PokemonsContext';

type PokemonType = {
  slot: number,
  type: {
    name: string,
    url: string,
  },
}

export default function PokemonCard({
  name,
  image,
  types,
  url
}: {
  name: string,
  image: string,
  types: PokemonType[],
  url: string
}) {
const { setPokemon } = useContext(PokemonContext);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={image}
        title={name}
      />
      <CardContent>
        name:
        <Box>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>

          types:
          <div style={{ display: 'flex' }}>
            {types.map(e =>
              <Typography key={Math.random()} gutterBottom variant="caption" component="div">
                {e.type.name} |
              </Typography>
            )
            }
          </div>
        </Box>
      </CardContent>
    </Card>
  );
}