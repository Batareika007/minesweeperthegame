// import s from '../../components/Sprite.module.css'

function Cell({ id, style = 'sprite_mine_empty', hasFlag, number }) {
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
		} else {
			target.classList.remove('sprite_mine_empty')
			target.classList.add('sprite_mine_empty_pressed')
			console.log(`clicked ${id} cell`)
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
