import { Cell } from '../Cell'

function randomInteger(min, max) {
	let rand = min + Math.random() * (max + 1 - min)
	return Math.floor(rand)
}
export const arr = []

function addDiv() {
	for (let i = 0; i < 256; i++) {
		arr.push(i)
	}
	return arr
}
addDiv()

export const minesId = []

const addRundomMines = () => {
	let i = 0
	while (i < 40) {
		const randomNum = randomInteger(0, 255)
		if (!minesId.includes(randomNum)) {
			minesId.push(randomNum)
			i++
		}
	}
	return minesId
}
addRundomMines()

// export const BoardReady = arr.map((i) => {
// 	if (minesId.includes(i)) {
// 		return <Cell key={i} hasMine id={i} data={'mine'} />
// 	}
// 	return <Cell key={i} id={i} hasMine={false} data={'no'} />
// })
