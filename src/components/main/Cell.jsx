import SmileImg from "../header/SmileImg"

function Cell({ id, style = 'sprite_mine_empty', hasFlag, number, hasMine }) {
	
	function checkEachCells(id) {
		const top = `${id - 17} ${id - 16} ${id - 15}`
		const left = `${id - 17} ${id - 1} ${id + 15}`
		const right = `${id - 15} ${id + 1} ${id + 17}`
		const bottom = `${id + 15} ${id + 16} ${id + 17}`
		const all = `${id - 17} ${id - 16} ${id - 15} ${id + 1} ${id + 17} ${
			id + 16
		} ${id + 15} ${id - 1} `
		console.log(`I clicked ${id}`)
		let countMines = 0
		if (id == 0) {
			console.log(`check ${id + 1} ${id + 17} ${id + 16} cells`)
		} else if (id == 15) {
			console.log(`check ${id - 1} ${id + 15} ${id + 16} cells`)
		} else if (id == 240) {
			console.log(`check ${id - 16} ${id - 15} ${id + 1} cells`)
		} else if (id == 255) {
			console.log(`check ${id - 16} ${id - 17} ${id - 1} cells`)
		} else if (id <= 15) {
			console.log(`check ${bottom} ${id - 1} ${id + 1} cells`)
		} else if (id >= 240) {
			console.log(`check ${top} ${id - 1} ${id + 1} cells`)
		} else if (id % 16 == 0) {
			console.log(`check ${right} ${id - 16} ${id + 16} cells`)
		} else if (id % 16 == 15) {
			console.log(`check ${left} ${id - 17} ${id + 15} cells `)
		} else {
			console.log(`check ${all} cells`)
		}
	}

	const rightClick = (e) => {
		const { target } = e
		e.preventDefault()
		if (target.classList.contains('sprite_mine_flag')) {
			target.classList.remove('sprite_mine_flag')
			target.classList.add('sprite_mine_question')
		} else if (target.classList.contains('sprite_mine_question')) {
			target.classList.remove('sprite_mine_question')
			target.classList.remove('sprite_mine_empty_pressed')
			target.classList.add('sprite_mine_empty')
		} else {
			// добавить флаг
			target.classList.add('sprite_mine_flag')
		}
	}

	const handleClick = ({ target }) => {
		const isFlag = target.classList.contains('sprite_mine_flag')
		const isQuestion = target.classList.contains('sprite_mine_question')
		if (isFlag || isQuestion) {
			return
		} else if (hasMine) {
			target.classList.remove('sprite_mine_empty')
			target.classList.add('sprite_mine_red')
	
		} else {
			target.classList.remove('sprite_mine_empty')
			target.classList.add('sprite_mine_empty_pressed')
			checkEachCells(id)
		}
	}

	return (
		<div
			className={`sprite sprite_mine_size ${style}`}
			onClick={handleClick}
			onContextMenu={rightClick}></div>
	)
}

export default Cell
