import PersonalInformation from './PersonalInformation';
import PetInformation from './PetInformation';
import './App.scss';

function App() {
  return (
    <div className="App">
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
