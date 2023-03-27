export interface Pokemon {
	id: number
	name: string
	sprites: {
		front_default: string
	}
	height: number
	weight: number
	abilities: {
		ability: {
			name: string
		}
	}[]
	types: {
		type: {
			name: string
		}
	}[]
	stats: {
		stat: {
			name: string
		}
		base_stat: string
	}[]
}
