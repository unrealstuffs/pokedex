import axios from 'axios'
import { useState } from 'react'
import { useActions } from '../../../hooks/useActions'
import { Pokemon } from '../../../types/pokemon'
import { Status } from '../types/status'

export const usePokemons = () => {
	const [totalResults, setTotalResults] = useState(0)
	const [status, setStatus] = useState<Status>('init')
	const { setPokemons, setDisplayedPokemons } = useActions()

	const fetchPokemons = async (page: number, pageSize: number) => {
		setStatus('loading')
		try {
			const response = await axios.get<{
				results: { name: string; url: string }[]
				count: number
			}>(
				`https://pokeapi.co/api/v2/pokemon?offset=${
					(page - 1) * pageSize
				}&limit=${pageSize}`
			)
			const results = response.data.results

			const newPokemons = await Promise.all(
				results.map(async result => {
					const pokemonResponse = await axios.get<Pokemon>(result.url)
					return pokemonResponse.data
				})
			)
			setPokemons(newPokemons)
			setDisplayedPokemons(newPokemons)
			setTotalResults(response.data.count)
			setStatus('success')
		} catch {
			setStatus('error')
		}
	}

	return { status, totalResults, fetchPokemons }
}
