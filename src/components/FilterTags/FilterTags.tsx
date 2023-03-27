import { Tag } from 'antd'
import { useEffect, useState } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'

const FilterTags = () => {
	const { pokemons } = useTypedSelector(state => state.pokemons)
	const { setDisplayedPokemons } = useActions()

	const [selectedTypes, setSelectedTypes] = useState<string[]>([])

	const getTypeTags = () => {
		const allTypes = new Set<string>()
		pokemons.forEach(pokemon => {
			pokemon.types.forEach(type => {
				allTypes.add(type.type.name)
			})
		})
		return Array.from(allTypes).map(type => (
			<Tag
				key={type}
				color={selectedTypes.includes(type) ? 'blue' : 'default'}
				onClick={() => handleTagClick(type)}
				style={{ cursor: 'pointer' }}
			>
				{type}
			</Tag>
		))
	}

	const handleTagClick = (type: string) => {
		if (selectedTypes.includes(type)) {
			setSelectedTypes(
				selectedTypes.filter(selectedType => selectedType !== type)
			)
		} else {
			setSelectedTypes([...selectedTypes, type])
		}
	}

	useEffect(() => {
		const filtered = pokemons.filter(pokemon => {
			if (selectedTypes.length === 0) {
				return true
			}
			const types = pokemon.types.map(type => type.type.name)
			return selectedTypes.some(type => types.includes(type))
		})
		setDisplayedPokemons(filtered)
	}, [selectedTypes])

	return <div style={{ textAlign: 'center' }}>{getTypeTags()}</div>
}

export default FilterTags
