const PersonalInformation = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.name}</h1>
      <strong>{props.location}</strong>
      <br />
      <em>Favorite color is {props.color}</em>
      <br />
      <p>This person {props.vegan ? 'is' : 'is not'} vegan.</p>
      <br />
      <p>Their birthday is on {props.birthdate.toDateString()}</p>
      <br />
      <p>Their favorite beverages are {props.beverages.join(', ')}.</p>
    </div>
  );
};

export default PersonalInformation;
