import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { pokemonReducer } from './slices/pokemonSlice'

const rootReducer = combineReducers({
	pokemons: pokemonReducer,
})

export const store = configureStore({
	reducer: rootReducer,
})

export type TypeRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
