import React from 'react'
import Cell from './Cell'

const arr = []
function addDiv() {
	for (let i = 0; i < 256; i++) {
		arr.push(i)
	}
	// console.log(arr)
	return arr
}
addDiv()

function randomInteger(min, max) {
	let rand = min + Math.random() * (max + 1 - min)
	return Math.floor(rand)
}

const minesId = []

const addRundomMines = () => {
	let i = 0
	while (i < 40) {
		const randomNum = randomInteger(0, 255)
		if (!minesId.includes(randomNum)) {
			minesId.push(randomNum)
			i++
		}
	}
	// console.log(minesId)
}
addRundomMines()



function Board({onClickFun}) {
	const BoardReady = arr.map((i) => {
		if (minesId.includes(i)) {
			
			return (
				<Cell
					key={i}
					hasMine
					id={i}
					// style={'sprite_mine_empty'}
					style={'sprite_mine_show'}
				/>
			)
		}
		return <Cell key={i} id={i} hasMine={false} hasFlag={false} number={false} />
	})
	return <div className='board'>{BoardReady}</div>
}

export default Board
