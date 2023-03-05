import { Header } from './components/Header'
import { Board } from './components/Board'
import style from './App.module.css'
import { CreateBoard } from './components/utils/generateCells'
import {  useState } from 'react'


function App() {
	const [board, setBoard] = useState(CreateBoard())
	
	
	function newBoard() {
		setBoard()
		setTimeout(() => {
			setBoard(CreateBoard)
		}, 0)
		
	}
	
	function smileExciting(){
		console.log('smileExciting')
		
	}
	return (
		
		<div className={style.PlayArea}>
			<Header createNewBoard={newBoard} />
			<Board createBoard={board} smileExciting={smileExciting} />
		</div>
	)
}

export default App
