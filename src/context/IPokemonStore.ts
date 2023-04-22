
interface IPokemonStore {
  search: string;
  setSearch: Function;
  hide: boolean;
  setHide: Function;
  pokemon: string;
  setPokemon: Function;
}

export default IPokemonStore;
