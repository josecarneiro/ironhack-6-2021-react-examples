import React from 'react';
// const PetInformation = (props) => {
//   return (
//     <div>
//       <h3>{props.name}</h3>
//       <strong>{props.species}</strong>
//     </div>
//   );
// };
// const PetInformation = ({ name, species }) => {
//   return (
//     <>
//       <h3>{name}</h3>
//       <strong>{species}</strong>
//     </>
//   );
// };

class PetInformation extends React.Component {
  render() {
    // If you want to, you can still destructure the props object
    // const { name, species } = this.props;
    return (
      <div>
        <h3>{this.props.name}</h3>
        <strong>{this.props.species}</strong>
      </div>
    );
  }
}

export default PetInformation;
