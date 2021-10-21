import axios from 'axios';

export const listAllPokemon = () => {
  return axios
    .get('https://pokeapi.co/api/v2/pokemon?limit=10000')
    .then((response) => {
      const data = response.data;
      const list = data.results.map((result, index) => {
        return {
          name: result.name,
          id: index + 1
        };
      });
      return list;
    });
};

export const loadPokemon = (id) => {
  return axios
    .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => {
      const data = response.data;
      const pokemon = {
        id: data.id,
        name: data.name,
        photo: data.front_default
      };
      return pokemon;
    });
};
