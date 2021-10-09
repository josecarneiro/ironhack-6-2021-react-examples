const PersonalInformation = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.name}</h1>
      <strong>{props.location}</strong>
      <br />
      <em style={{ backgroundColor: props.color }}>
        Favorite color is {props.color}
      </em>
      <br />
      <p>This person {props.vegan ? 'is' : 'is not'} vegan.</p>
      <br />
      <p>Their birthday is on {props.birthdate.toDateString()}</p>
      <br />
      <p>Their favorite beverages are {props.beverages.join(', ')}.</p>
    </div>
  );
};

// green
// #fac356
// #fac35655
// rgb(200, 255, 100)
// rgba(200, 255, 100, 0.5)
// hsl(220, 95%, 70%)
// hsla(220, 95%, 70%, 0.5)

export default PersonalInformation;
