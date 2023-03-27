import { Modal, Space, Tag, Typography } from 'antd'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'

const { Title } = Typography

const PokemonDetails = () => {
	const { selectedPokemon } = useTypedSelector(state => state.pokemons)
	const { setSelectedPokemon } = useActions()

	const handleModalClose = () => {
		setSelectedPokemon(null)
	}

	return (
		<Modal
			open={!!selectedPokemon}
			onCancel={handleModalClose}
			footer={null}
		>
			{selectedPokemon && (
				<>
					<div style={{ textAlign: 'center' }}>
						<img
							src={selectedPokemon.sprites.front_default}
							alt={selectedPokemon.name}
							width='50%'
						/>
					</div>
					<Title style={{ fontSize: 24 }}>
						{selectedPokemon.name}
					</Title>
					<div>
						{selectedPokemon.types.map(type => (
							<Tag key={type.type.name}>{type.type.name}</Tag>
						))}
					</div>
					<div>
						{selectedPokemon.stats.map(stat => (
							<div key={stat.stat.name}>
								<span>{stat.stat.name}: </span>
								<span>{stat.base_stat}</span>
							</div>
						))}
					</div>
				</>
			)}
		</Modal>
	)
}

export default PokemonDetails
