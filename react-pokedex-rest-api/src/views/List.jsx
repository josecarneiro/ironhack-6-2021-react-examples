import { Component } from 'react';
import { Link } from 'react-router-dom';
import { listAllPokemon } from './../services/pokeapi';

class ListView extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    listAllPokemon()
      .then((list) => {
        this.setState({ list });
      })
      .catch((error) => {
        console.log(error);
        alert('Something went wrong loading the list pokemon.');
      });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.list.map((pokemon) => (
            <li key={pokemon.id}>
              <Link to={`/pokemon/${pokemon.id}`}>{pokemon.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListView;
