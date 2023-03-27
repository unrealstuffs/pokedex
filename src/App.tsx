import PokemonList from './components/PokemonList/PokemonList'
import SearchBar from './components/SearchBar/SearchBar'
import FilterTags from './components/FilterTags/FilterTags'
import PokemonDetails from './components/PokemonDetails/PokemonDetails'
import { Layout, Space } from 'antd'

const { Content } = Layout

const App = () => {
	return (
		<Layout style={{ padding: 15 }}>
			<Content>
				<Space
					direction='vertical'
					size='middle'
					style={{ display: 'flex' }}
				>
					<SearchBar />
					<FilterTags />
					<PokemonList />
					<PokemonDetails />
				</Space>
			</Content>
		</Layout>
	)
}

export default App
