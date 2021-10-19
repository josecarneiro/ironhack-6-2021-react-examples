import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import ListView from './views/List';
import DetailView from './views/Detail';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Pokedex</Link>
        <Link to="/pokemon/3">Venosaur</Link>
        <Link to="/pokemon/6">Charizard</Link>
        <Link to="/pokemon/9">Blastoise</Link>
      </nav>
      <Switch>
        <Route path="/" component={ListView} exact />
        <Route path="/pokemon/:number" component={DetailView} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
