import React from 'react';

class FilterButtons extends React.Component {
  render() {
    const { type, filterPokemon } = this.props;
    return (
      <button onClick={filterPokemon} >{type}</button>
    )
  }
}

export default FilterButtons;
