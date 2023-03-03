import React from 'react'
import EmptyMine from './EmptyMine'
import MineShow from './MineShow'

const arr = []
function addDiv() {
	for (let i = 0; i < 256; i++) {
		arr.push(i)
	}
	console.log(arr)
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
	console.log(minesId)
}
addRundomMines()

function Board() {

	return (
		<div className='board'>
			{arr.map((i) => {
				if (minesId.includes(i)) {
					// console.log(`${i} got mine`)
					return <MineShow key={i} id={i} />
				}
				return <EmptyMine key={i} id={i}  />
			})}
		</div>
	)
}

export default Board
