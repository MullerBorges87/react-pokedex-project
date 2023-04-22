import React, { createContext, useCallback, useEffect, useState } from 'react';
import IPokemonStore from './IPokemonStore';

export type abilitie = {
  name: string;
  url: string;
};

export type form = {
  name: string;
  url: string;
};

export type gameIndex = {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
};

export type move = {
  name: string;
  url: string;
};

export type stat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

export type type = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

export type pokemonType = {
  abilities: abilitie[];
  base_experience: number;
  forms: form[];
  game_indices: gameIndex[];
  height: number;
  held_items: string[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: move[];
  name: string;
  order: number;
  past_types: string[];
  species: {
    name: string;
    url: string;
  };
  sprites: {
    back_default: string;
  };
  stats: stat[];
  types: type[];
  weight: number;
};

const initialAbilities = [{
  name: '',
  url: '',
}]

const initialForms = [{
  name: '',
  url: '',
}]

const initialGameIndex = [{
  game_index: 0,
  version: {
    name: '',
    url: '',
  }
}]

const initialMove = [{
  name: '',
  url: '',
}]

const initialStat = [
  {
    base_stat: 0,
    effort: 0,
    stat: {
      name: '',
      url: '',
    },
  },
]

const initialType = [
  {
    slot: 0,
    type: {
      name: '',
      url: '',
    },
  },
]

const initialPokemon = {
  abilities: [initialAbilities],
  base_experience: 0,
  forms: [initialForms],
  game_indices: [initialGameIndex],
  height: 0,
  held_items: [],
  id: 0,
  is_default: true,
  location_area_encounters: '',
  moves: [initialMove],
  name: '',
  order: 0,
  past_types: [],
  species: {
    name: '',
    url: '',
  },
  sprites: {
    back_default: '',
  },
  stats: [initialStat],
  types: [initialType],
  weight: 0,
}

const initalState = {
  search: '',
  setSearch: () => { },
  hide: true,
  setHide: () => { },
  pokemon:'',
  setPokemon: () => { },
}

export const PokemonContext = createContext<IPokemonStore>(initalState)
export default function PokemonProvider({ children }: { children: React.ReactNode }) {
  const [search, setSearch] = useState('');
  const [hide, setHide] = useState(true);
  const [pokemon, setPokemon] = useState('');

  const store = {
    search,
    setSearch,
    hide,
    setHide,
    pokemon,
    setPokemon,
  }

  return (
    <PokemonContext.Provider value={store}>
      {children}
    </PokemonContext.Provider>
  )
}
