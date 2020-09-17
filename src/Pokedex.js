import React from 'react';
import Pokemon from './Pokemon';
import FilterButtons from './buttons';
import pokemons from './data';

class Pokedex extends React.Component {
    constructor() {
        super()

        this.nextPokemon = this.nextPokemon.bind(this);
        this.filterPokemon = this.filterPokemon.bind(this);

        const pokemonTypes = [...new Set(pokemons.map(pokemon => pokemon.type))];

        this.state = {
            pokemonIndex: 0,
            currentArray: pokemons,
            types: pokemonTypes,
        }
    }

    nextPokemon = () => {
        this.setState((prevState) => ({
            pokemonIndex: (prevState.pokemonIndex === this.state.currentArray.length - 1)
                ? prevState.pokemonIndex - (this.state.pokemonIndex)
                : prevState.pokemonIndex + 1
        }))
    }

    previousPokemon = () => {
        this.setState((prevState) => ({
            pokemonIndex: (prevState.pokemonIndex === 0)
                ? prevState.pokemonIndex + (this.state.currentArray.length - 1)
                : prevState.pokemonIndex - 1
        }))
    }

    filterPokemon = ({ target }) => {
        let filteredPokes = pokemons.filter(pokemon => pokemon.type === `${target.innerText}`);

        this.setState(() => ({
            pokemonIndex: 0,
            currentArray: filteredPokes,
        }))
    }

    reset = () => {
        this.setState(() => ({ currentArray: pokemons }))
    }

    render() {
        const { pokemonIndex, currentArray, types } = this.state;

        return (
            <div className="pokedex">
                <Pokemon key={currentArray[pokemonIndex].id} pokemon={currentArray[pokemonIndex]} />
                <button onClick={this.nextPokemon} >Next</button>
                <button onClick={this.previousPokemon} >Previous</button>
                <button onClick={this.reset} >All</button>
                {types.map((pokemon) => <FilterButtons key={pokemon} filterPokemon={this.filterPokemon} type={pokemon} />)}
            </div>
        );
    }
}

export default Pokedex;
