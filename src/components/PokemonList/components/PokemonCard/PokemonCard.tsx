import { Card, Space, Tag } from 'antd'
import { Pokemon } from '../../../../types/pokemon'

const { Meta } = Card

const PokemonCard = ({
	pokemon,
	onClick,
}: {
	pokemon: Pokemon
	onClick: () => void
}) => {
	const { name, sprites, types } = pokemon

	return (
		<Card
			hoverable
			style={{ width: 240 }}
			cover={<img alt={name} src={sprites.front_default} />}
			onClick={onClick}
		>
			<Space direction='vertical' size='small'>
				<Meta title={name.toUpperCase()} />
				<div>
					{types.map(type => (
						<Tag key={type.type.name}>{type.type.name}</Tag>
					))}
				</div>
			</Space>
		</Card>
	)
}

export default PokemonCard
