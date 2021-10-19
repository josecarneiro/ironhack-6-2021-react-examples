import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';

const BookView = (props) => {
  console.log(props.match.params.id);
  return (
    <div>
      <h1>Book: {props.match.params.id}</h1>
    </div>
  );
};

const PersonView = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        Person: {props.match.params.name}, is {props.age} years old
      </h1>
    </div>
  );
};

const SlashView = () => {
  return (
    <div>
      <h1>Slash</h1>
    </div>
  );
};

// Spreading props object in component
// const bar = { a: 1, b: 2, c: 3 };
// <Foo a={bar.a} b={bar.b} c={bar.c} />
// <Foo {...bar} />

function App() {
  const age = 30;
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Link to="/">Slash</Link>
          <Link to="/book/machine">Book</Link>
          <Link to="/person/jose">Person</Link>
        </div>
        <Switch>
          <Redirect path="/person/caroline" to="/person/sophie" />
          {/* With this solution, the BookView component will be rendered
          with some routing specific props (match, history, location, staticContext) */}
          <Route path="/book/:id" component={BookView} />
          {/* What if besides providing PersonView with routing props
          we wanted to pass aditional props (eg. age)? */}
          <Route
            path="/person/:name"
            render={(props) => <PersonView age={age} {...props} />}
            exact
          />
          <Route path="/" exact>
            <SlashView />
          </Route>
          <Route>
            <h1>There's nothing to see here.</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
