import Header from './components/header/Header'
import Board from './components/main/Board'

function App() {
	const smiles = {
		regular: 'sprite_smile_regular',
		pressed: 'sprite_smile_regular_pressed',
		exciting: 'sprite_smile_exciting',
		cool: 'sprite_smile_cool',
		dead: 'sprite_smile_dead',
	}

	return (
		<main className='main'>
			<Header smileImg={smiles.dead}/>

			<Board />
		</main>
	)
}

export default App
