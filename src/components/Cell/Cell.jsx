import style from './Cell.module.css'

export function Cell({ id, hasMine, data }) {
	function checkEachCells(id) {
		const top = `${id - 17} ${id - 16} ${id - 15}`
		const left = `${id - 17} ${id - 1} ${id + 15}`
		const right = `${id - 15} ${id + 1} ${id + 17}`
		const bottom = `${id + 15} ${id + 16} ${id + 17}`
		const all = `${id - 17} ${id - 16} ${id - 15} ${id + 1} ${id + 17} ${
			id + 16
		} ${id + 15} ${id - 1} `
		console.log(`I clicked ${id}`)
		// let countMines = 0
		if (id === 0) {
			console.log(`check ${id + 1} ${id + 17} ${id + 16} cells`)
		} else if (id === 15) {
			console.log(`check ${id - 1} ${id + 15} ${id + 16} cells`)
		} else if (id === 240) {
			console.log(`check ${id - 16} ${id - 15} ${id + 1} cells`)
		} else if (id === 255) {
			console.log(`check ${id - 16} ${id - 17} ${id - 1} cells`)
		} else if (id <= 15) {
			console.log(`check ${bottom} ${id - 1} ${id + 1} cells`)
		} else if (id >= 240) {
			console.log(`check ${top} ${id - 1} ${id + 1} cells`)
		} else if (id % 16 === 0) {
			console.log(`check ${right} ${id - 16} ${id + 16} cells`)
		} else if (id % 16 === 15) {
			console.log(`check ${left} ${id - 17} ${id + 15} cells `)
		} else {
			console.log(`check ${all} cells`)
		}
	}

	const rightClick = (e) => {
		const { target } = e
		e.preventDefault()
		if (target.classList.contains(style.flag)) {
			target.classList.remove(style.flag)
			target.classList.add(style.question)
		} else if (target.classList.contains(style.question)) {
			target.classList.remove(style.question)
			target.classList.remove(style.emptyPressed)
			target.classList.add(style.empty)
		} else {
			// добавить флаг
			target.classList.add(style.flag)
		}
	}

	const handleClick = ({ target }) => {
		const isFlag = target.classList.contains(style.flag)
		const isQuestion = target.classList.contains(style.question)
		if (isFlag || isQuestion) {
			return
		} else if (hasMine) {
			target.classList.remove(style.empty)
			target.classList.add(style.mineRed)
		} else {
			target.classList.remove(style.empty)
			target.classList.add(style.emptyPressed)
			checkEachCells(id)
		}
	}

	return (
		<div
			className={`sprite ${style.size} ${style.empty}`}
			onClick={handleClick}
			onContextMenu={rightClick}
			value={data}></div>
	)
}
