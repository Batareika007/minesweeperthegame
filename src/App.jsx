import { Header } from './components/Header'
import { Board } from './components/Board'
// import { Cell } from './components/Cell'
import { BoardReady } from './components/utils/generateCells'

function App() {

	return (
		<div className='main'>
			<Header />
			<Board createBoard={BoardReady} />
		</div>
	)
}

export default App
