import style from './Cell.module.css'

export function Cell({ id, hasMine, data }) {
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
			switch (data) {
				case 0:
					target.classList.add(style.num0)
					break;
				case 1:
					target.classList.add(style.num1)
					break;
				case 2:
					target.classList.add(style.num2)
					break;
				case 3:
					target.classList.add(style.num3)
					break;
				case 4:
					target.classList.add(style.num4)
					break;
				case 5:
					target.classList.add(style.num5)
					break;
				case 6:
					target.classList.add(style.num6)
					break;
				case 7:
					target.classList.add(style.num7)
					break;
				case 8:
					target.classList.add(style.num8)
					break;

				default:
					break
			}
			// if(data === 0 ){
			// 	target.classList.add(style.num0)
			// }
			// if(data === 1 ){
			// 	target.classList.add(style.num1)
			// }
			target.classList.remove(style.empty)
		}
	}

	return (
		<div
			className={`sprite ${style.size} ${style.empty}`}
			onClick={handleClick}
			onContextMenu={rightClick}
			data={data}></div>
	)
}
