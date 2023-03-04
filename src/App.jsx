import { Header } from './components/Header'
import { Board } from './components/Board'
import { Cell } from './components/Cell'
import { arr, minesId } from './components/utils/generateCells'

function App() {
	const BoardReady = arr.map((i) => {
		if (minesId.includes(i)) {
			return <Cell key={i} hasMine id={i} data={'mine'} />
		}
		return <Cell key={i} id={i} data={'free'} />
	})

	// const smiles = {
	// 	regular: 'sprite_smile_regular',
	// 	pressed: 'sprite_smile_regular_pressed',
	// 	exciting: 'sprite_smile_exciting',
	// 	cool: 'sprite_smile_cool',
	// 	dead: 'sprite_smile_dead',
	// }

	return (
		<div className='main'>
			<Header></Header>
			<Board createBoard={BoardReady} />
		</div>
	)
}

export default App
