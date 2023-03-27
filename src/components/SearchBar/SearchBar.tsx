import { Input } from 'antd'
import { useEffect, useState } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'

const SearchBar = () => {
	const { pokemons } = useTypedSelector(state => state.pokemons)
	const { setDisplayedPokemons } = useActions()
	const [searchValue, setSearchValue] = useState('')

	const handleSearch = (value: string) => {
		setSearchValue(value)
	}

	useEffect(() => {
		const filteredPokemons = pokemons.filter(pokemon =>
			pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
		)
		console.log(filteredPokemons)
		setDisplayedPokemons(filteredPokemons)
	}, [searchValue])

	return (
		<div style={{ margin: '0 auto', maxWidth: 300 }}>
			<Input
				placeholder='Search by name'
				value={searchValue}
				onChange={event => handleSearch(event.target.value)}
			/>
		</div>
	)
}

export default SearchBar
