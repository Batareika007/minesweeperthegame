import React from 'react'
import Cell from './Cell'
import MineShow from './MineShow'

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

function Board() {
	let styleName = 'sprite_colored_1'
	const BoardReady = arr.map((i) => { 
		if (i <= 15) {
			return <Cell style={styleName} />
		}
		if (minesId.includes(i)) {
			// console.log(`${i} got mine`)
			return <MineShow key={i} hasMine id={i} />
		}
		return <Cell key={i} id={i} />
	})

	return (
		// <div className='board'>
		// 	{arr.map((i) => {
		// 		if (minesId.includes(i)) {
		// 			// console.log(`${i} got mine`)
		// 			return <MineShow key={i} id={i} />
		// 		}
		// 		return <Cell key={i} id={i} />
		// 	})}
		// </div>
		<div className='board'>{BoardReady}</div>
	)
}

export default Board
