import PersonalInformation from './PersonalInformation';
import PetInformation from './PetInformation';

const Card = (props) => {
  return (
    <div
      style={{ boxShadow: '0 0.125em 1em -0.5em #000000dd', padding: '1em' }}
    >
      {props.children}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Card>
        <h1>Ciao Mondo</h1>
        <img src="logo192.png" alt="Logo" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
          tempore?
        </p>
      </Card>
      <PetInformation name="Whiskers" species="cat" />

      <PersonalInformation
        name="José Carneiro"
        location="Restauradores, Lisbon, Portugal"
        color="blue"
        vegan={false}
        birthdate={new Date(1993, 5 - 1, 13)}
        beverages={['orange juice', 'lemonade', 'gin']}
      />
      <PersonalInformation
        name="Stefano Santonocito"
        location="Penha de França, Lisbon, Portugal"
        color="orange"
        vegan={true}
        // vegan // if no value is passed, it will be true
        birthdate={new Date(1991, 4 - 1, 7)}
        beverages={['coffee', 'pineaple juice', 'beer']}
      />
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
