import { Component } from 'react';
import { loadPokemon } from '../services/pokeapi';
// import POKEMON_LIST from './../pokemon-list.json';

class DetailView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: null,
      count: Math.random()
    };
  }

  componentDidMount() {
    this.loadPokemonDetail();
  }

  // If state or props of component changes,
  // component gets rerendered and componentDidUpdate is executed
  componentDidUpdate(previousProps, previousState) {
    if (previousProps.match.params.number !== this.props.match.params.number) {
      this.loadPokemonDetail();
    }
  }

  loadPokemonDetail() {
    loadPokemon(this.props.match.params.number).then((pokemon) => {
      this.setState({ pokemon });
    });
  }

  render() {
    return (
      (this.state.pokemon && (
        <div>
          <h1>{this.state.pokemon.name}</h1>
        </div>
      )) || <h1>Loading...</h1>
    );
  }
}

export default DetailView;
