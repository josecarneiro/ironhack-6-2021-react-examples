import { Component } from 'react';
import { Link } from 'react-router-dom';
import POKEMON_LIST from '../pokemon-list.json';

class ListView extends Component {
  constructor() {
    super();
    this.state = {
      list: POKEMON_LIST
    };
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.list.map((pokemon) => (
            <li key={pokemon.id}>
              <Link to={`/pokemon/${pokemon.id}`}>{pokemon.name.english}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListView;
