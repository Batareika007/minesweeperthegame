import { Cell } from '../Cell'

export function CreateBoard() {
	function randomInteger(min, max) {
		let rand = min + Math.random() * (max + 1 - min)
		return Math.floor(rand)
	}
	const arr = []
	
	function addDiv() {
		for (let i = 0; i < 256; i++) {
			arr.push(i)
		}
		return arr
	}
	addDiv()
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
		return minesId
	}
	addRundomMines()
	function checkEachCells(id, array) {
		let counter = 0
		if (id === 0) {
			if (array.includes(id + 1)) {
				counter++
			}
			if (array.includes(id + 16)) {
				counter++
			}
			if (array.includes(id + 17)) {
				counter++
			}
		} else if (id === 15) {
			if (array.includes(id - 1)) {
				counter++
			}
			if (array.includes(id + 15)) {
				counter++
			}
			if (array.includes(id + 16)) {
				counter++
			}
		} else if (id === 240) {
			if (array.includes(id - 16)) {
				counter++
			}
			if (array.includes(id - 15)) {
				counter++
			}
			if (array.includes(id + 1)) {
				counter++
			}
		} else if (id === 255) {
			if (array.includes(id - 16)) {
				counter++
			}
			if (array.includes(id - 17)) {
				counter++
			}
			if (array.includes(id - 1)) {
				counter++
			}
		} else if (id <= 15) {
			if (array.includes(id - 1)) {
				counter++
			}
			if (array.includes(id + 1)) {
				counter++
			}
			if (array.includes(id + 15)) {
				counter++
			}
			if (array.includes(id + 16)) {
				counter++
			}
			if (array.includes(id + 17)) {
				counter++
			}
		} else if (id >= 240) {
			if (array.includes(id - 1)) {
				counter++
			}
			if (array.includes(id + 1)) {
				counter++
			}
			if (array.includes(id - 15)) {
				counter++
			}
			if (array.includes(id - 16)) {
				counter++
			}
			if (array.includes(id - 17)) {
				counter++
			}
		} else if (id % 16 === 0) {
			if (array.includes(id - 16)) {
				counter++
			}
			if (array.includes(id + 16)) {
				counter++
			}
			if (array.includes(id - 15)) {
				counter++
			}
			if (array.includes(id + 1)) {
				counter++
			}
			if (array.includes(id + 17)) {
				counter++
			}
		} else if (id % 16 === 15) {
			if (array.includes(id - 16)) {
				counter++
			}
			if (array.includes(id + 16)) {
				counter++
			}
			if (array.includes(id - 17)) {
				counter++
			}
			if (array.includes(id + 15)) {
				counter++
			}
			if (array.includes(id - 1)) {
				counter++
			}
		} else {
			if (array.includes(id - 17)) {
				counter++
			}
			if (array.includes(id - 16)) {
				counter++
			}
			if (array.includes(id - 15)) {
				counter++
			}
			if (array.includes(id + 17)) {
				counter++
			}
			if (array.includes(id + 16)) {
				counter++
			}
			if (array.includes(id + 15)) {
				counter++
			}
			if (array.includes(id + 1)) {
				counter++
			}
			if (array.includes(id - 1)) {
				counter++
			}
		}
		return <Cell key={id} id={id} data={counter}  />
	}

	const BoardReady = arr.map((i) => {
		if (minesId.includes(i)) {
			return <Cell key={i} hasMine id={i} data={'mine'}/>
		} else {
			return checkEachCells(i, minesId)
		}
	})
	return BoardReady
}
