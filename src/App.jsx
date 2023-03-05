import { Header } from './components/Header'
import { Board } from './components/Board'
import style from './App.module.css'
import { CreateBoard } from './components/utils/generateCells'
import { useState } from 'react'

function App() {
	const [board, setBoard] = useState(CreateBoard())

	function newBoard() {
		// setBoard(CreateBoard)
		setBoard()
		setTimeout(() => {
			setBoard(CreateBoard)
		}, 0)
	}
	return (
		<div className={style.PlayArea}>
			<Header clickSmile={newBoard} />
			<Board createBoard={board} />
		</div>
	)
}

export default App
