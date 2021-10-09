import React from 'react';

class ClickablePicture extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    };
  }

  handleClick = () => {
    this.setState((currentState) => {
      return { clicked: !currentState.clicked };
    });
  };

  render() {
    const { clicked } = this.state;
    const { img, imgClicked } = this.props;
    return (
      <img
        src={clicked ? imgClicked : img}
        alt="Stand-in alt"
        onClick={this.handleClick}
      />
    );
  }
}

export default ClickablePicture;
