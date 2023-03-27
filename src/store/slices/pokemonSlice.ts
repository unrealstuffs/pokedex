import { createSlice } from '@reduxjs/toolkit'
import { Pokemon } from '../../types/pokemon'

interface State {
	pokemons: Pokemon[]
	displayedPokemons: Pokemon[]
	selectedPokemon: Pokemon | null
}

const initialState: State = {
	pokemons: [],
	displayedPokemons: [],
	selectedPokemon: null,
}

const pokemonSlice = createSlice({
	name: 'pokemons',
	initialState,
	reducers: {
		setPokemons(state, action) {
			state.pokemons = action.payload
		},
		setDisplayedPokemons(state, action) {
			state.displayedPokemons = action.payload
		},
		setSelectedPokemon(state, action) {
			state.selectedPokemon = action.payload
		},
	},
})

export const pokemonActions = pokemonSlice.actions
export const pokemonReducer = pokemonSlice.reducer
