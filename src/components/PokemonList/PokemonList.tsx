import { Col, Pagination, Row, Space, Typography } from 'antd'
import { useEffect, useState } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { Pokemon } from '../../types/pokemon'
import PokemonCard from './components/PokemonCard/PokemonCard'
import { usePokemons } from './hooks/usePokemons'

const { Text } = Typography

const PokemonList = () => {
	const { status, totalResults, fetchPokemons } = usePokemons()
	const { displayedPokemons } = useTypedSelector(state => state.pokemons)
	const { setSelectedPokemon } = useActions()

	const [page, setPage] = useState(1)
	const [pageSize, setPageSize] = useState(10)

	useEffect(() => {
		fetchPokemons(page, pageSize)
	}, [page, pageSize])

	const handlePageChange = (page: number) => {
		setPage(page)
	}

	const handlePageSizeChange = (current: number, size: number) => {
		setPage(current)
		setPageSize(size)
	}

	const handleCardClick = (pokemon: Pokemon) => {
		setSelectedPokemon(pokemon)
	}

	return (
		<Space direction='vertical' size='middle' style={{ display: 'flex' }}>
			<Pagination
				current={page}
				pageSize={pageSize}
				onShowSizeChange={handlePageSizeChange}
				pageSizeOptions={[10, 20, 50]}
				total={totalResults}
				onChange={handlePageChange}
				style={{ textAlign: 'right' }}
			/>
			<Row gutter={[10, 10]} justify='center'>
				{status === 'loading' && <Text>Loading...</Text>}
				{status === 'error' && <Text>Error!</Text>}
				{status === 'success' &&
					displayedPokemons.map(pokemon => (
						<Col key={pokemon.id}>
							<PokemonCard
								pokemon={pokemon}
								onClick={() => handleCardClick(pokemon)}
							/>
						</Col>
					))}
			</Row>
		</Space>
	)
}

export default PokemonList
